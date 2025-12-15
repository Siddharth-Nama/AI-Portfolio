'use client';

import { cn } from '@/lib/utils';
import { useState, useEffect, useRef, useCallback } from 'react';
import { MoveUpRight, Bot, Mic, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

// --- CONSTANTS ---
const COLORS = [
    'bg-yellow-500 text-black',
    'bg-blue-500 text-white',
    'bg-teal-500 text-black',
    'bg-indigo-500 text-white',
];

const MENU_LINKS = [
    { name: 'Home', url: '/' },
    { name: 'About Me', url: '/#about-me' },
    { name: 'Experience', url: '/#my-experience' },
    { name: 'Projects', url: '/#selected-projects' },
];

// Type definitions for better TypeScript support
interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
}
interface SpeechRecognitionErrorEvent extends Event {
    error: string;
}
interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    lang: string;
    interimResults: boolean;
    start(): void;
    stop(): void;
    onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;
    onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any) | null;
    onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any) | null;
}
declare global {
    interface Window {
        SpeechRecognition: new () => SpeechRecognition;
        webkitSpeechRecognition: new () => SpeechRecognition;
    }
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAssistantOpen, setIsAssistantOpen] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isThinking, setIsThinking] = useState(false);

    // Track whether to auto-listen after speaking (disable when user stops speech)
    const [autoListen, setAutoListen] = useState(true);

    const router = useRouter();
    const recognitionRef = useRef<SpeechRecognition | null>(null);
    const socketRef = useRef<WebSocket | null>(null);

    // For positioning panel
    const aiBtnRef = useRef<HTMLButtonElement>(null);
    const [assistantModalStyle, setAssistantModalStyle] = useState<React.CSSProperties>({});

    const clientId = `client_${Math.random().toString(36).substr(2, 9)}`;
    const WEBSOCKET_URL = `${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/${clientId}`;

    // -- Cleanup function --
    const cleanup = useCallback(() => {
        if (recognitionRef.current) {
            try { recognitionRef.current.stop(); } catch { }
        }
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.close();
        }
        window.speechSynthesis.cancel();
        setIsListening(false);
        setIsConnected(false);
        setError(null);
    }, []);

    // -- Speech Recognition setup --
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            setError('Speech Recognition not supported by this browser.');
            return;
        }
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';
        recognition.interimResults = true;

        recognition.onstart = () => { setIsListening(true); setError(null); };
        recognition.onend = () => { setIsListening(false); };
        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
            if (event.error === 'network') {
                setError('Voice recognition failed to connect. Please use Google Chrome.');
            } else if (event.error === 'no-speech') {
                // Graceful: don't set error, just stop listening
            } else {
                setError(`Speech recognition error: ${event.error}`);
            }
            setIsListening(false);
        };
        recognition.onresult = (event: SpeechRecognitionEvent) => {
            const currentTranscript = Array.from(event.results)
                .map((result) => result[0])
                .map((result) => result.transcript)
                .join('');
            setTranscript(currentTranscript);
            // Send final transcript via WebSocket
            if (event.results[0]?.isFinal && socketRef.current?.readyState === WebSocket.OPEN) {
                const message = currentTranscript.trim();
                if (message) {
                    setIsThinking(true);
                    try {
                        socketRef.current.send(JSON.stringify({
                            type: 'voice_input',
                            message: message,
                            timestamp: Date.now()
                        }));
                    } catch {
                        socketRef.current.send(message);
                    }
                }
            }
        };

        recognitionRef.current = recognition;

        return () => {
            recognition.onstart = null;
            recognition.onend = null;
            recognition.onerror = null;
            recognition.onresult = null;
        };
    }, []);

    // -- RESPONSIVE MODAL POSITIONING --
    // This effect now handles both desktop positioning and mobile centering,
    // and it updates on window resize.
    useEffect(() => {
        if (!isAssistantOpen) return;

        const handlePositionUpdate = () => {
            if (aiBtnRef.current) {
                // Mobile view (< 768px)
                if (window.innerWidth < 768) {
                    setAssistantModalStyle({}); // Reset inline styles to let Tailwind's centering classes work
                }
                // Desktop view (>= 768px)
                else {
                    const rect = aiBtnRef.current.getBoundingClientRect();
                    setAssistantModalStyle({
                        top: rect.bottom + 14,
                        right: window.innerWidth - rect.right,
                    });
                }
            }
        };

        handlePositionUpdate(); // Set initial position
        window.addEventListener('resize', handlePositionUpdate);

        return () => {
            window.removeEventListener('resize', handlePositionUpdate);
        };
    }, [isAssistantOpen]);

    // -- Websocket connect when open --
    useEffect(() => {
        if (!isAssistantOpen) {
            cleanup();
            return;
        }

        try {
            const socket = new WebSocket(WEBSOCKET_URL);
            socketRef.current = socket;

            socket.onopen = () => {
                setIsConnected(true);
                setError(null);
            };
            socket.onmessage = (event) => {
                let responseText: string;
                setIsThinking(false);
                try {
                    const data = JSON.parse(event.data);
                    responseText = data.message || data.text || data.response || String(data);
                } catch (e) {
                    responseText = String(event.data);
                }

                if ('speechSynthesis' in window && responseText.trim()) {
                    window.speechSynthesis.cancel();
                    const voices = window.speechSynthesis.getVoices();
                    const rishiVoice = voices.find(
                        v => v.name === "Google UK English Male" && v.lang === "en-GB"
                    );
                    const utterance = new SpeechSynthesisUtterance(responseText);
                    if (rishiVoice) {
                        utterance.voice = rishiVoice;
                    } else {
                        utterance.voice = voices[0];
                    }
                    utterance.rate = 1.2;
                    utterance.pitch = 0.7;
                    utterance.volume = 1;

                    utterance.onend = () => {
                        if (isAssistantOpen && autoListen && recognitionRef.current) {
                            setTimeout(() => {
                                try { recognitionRef.current?.start(); } catch { }
                            }, 400);
                        }
                    };
                    utterance.onerror = () => { /* optional: set error if desired */ };
                    window.speechSynthesis.speak(utterance);
                }
            };
            socket.onerror = () => {
                setIsThinking(false);
                setError('Connection error occurred');
                setIsConnected(false);
            };
            socket.onclose = (event) => {
                setIsThinking(false);
                setIsConnected(false);
                if (event.code !== 1000) setError('Connection lost');
            };
        } catch {
            setError('Failed to connect to assistant service');
        }
        return cleanup;
        // eslint-disable-next-line
    }, [isAssistantOpen, cleanup]);

    // -- When opening AI Assistant, autostart listening --
    useEffect(() => {
        if (isAssistantOpen && recognitionRef.current) {
            setAutoListen(true);
            setTimeout(() => {
                try { recognitionRef.current?.start(); } catch { }
            }, 300);
        }
    }, [isAssistantOpen]);

    // --- Handler: Toggle Assistant Modal ---
    const handleAssistantToggle = () => {
        setIsAssistantOpen(!isAssistantOpen);
        setTranscript('');
        setError(null);
        setAutoListen(true);
        window.speechSynthesis.cancel();
        setTimeout(() => setTranscript(''), 300);
    };

    const handleMenuClick = (url: string) => {
        router.push(url);
        setIsMenuOpen(false);
    };

    // --- Manual Controls (Mic, Stop Speech) ---
    const handleMicStart = () => {
        setError(null);
        setAutoListen(true);
        try { recognitionRef.current?.start(); } catch (e) { setError('Could not start mic.'); }
    };
    const handleMicStop = () => {
        setAutoListen(false);
        try { recognitionRef.current?.stop(); setIsListening(false); } catch { }
    };
    const handleSpeechStop = () => {
        window.speechSynthesis.cancel();
        setAutoListen(false);
        try { recognitionRef.current?.stop(); } catch { }
        setIsListening(false);
    };

    return (
        <>
            {/* Top right buttons container */}
            <div className="fixed top-5 right-5 md:right-10 z-50 flex items-center gap-2">
                {/* AI Assistant Button */}
                

                {/* Hamburger Menu Button */}
                <button
                    className="group size-12 relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    <span className={cn(
                        'inline-block w-3/5 h-0.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px]',
                        { 'rotate-45 -translate-y-1/2': isMenuOpen, 'md:group-hover:rotate-12': !isMenuOpen }
                    )}></span>
                    <span className={cn(
                        'inline-block w-3/5 h-0.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px]',
                        { '-rotate-45 -translate-y-1/2': isMenuOpen, 'md:group-hover:-rotate-12': !isMenuOpen }
                    )}></span>
                </button>
            </div>

            {/* Menu Overlay */}
            <div
                className={cn(
                    'fixed inset-0 z-40 bg-black/70 transition-all duration-150',
                    { 'opacity-0 invisible pointer-events-none': !isMenuOpen }
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Menu Panel */}
            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-40 overflow-hidden',
                    'flex flex-col lg:justify-center py-10 gap-y-14',
                    { 'translate-x-0': isMenuOpen }
                )}
            >
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-gray-800 duration-700 delay-150 z-[-1]',
                        { 'translate-x-0': isMenuOpen }
                    )}
                ></div>

                <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto text-white">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        {/* Social Links */}
                        <div className="max-lg:order-2">
                            <p className="text-gray-400 mb-5 md:mb-8">SOCIAL</p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg capitalize hover:underline transition-all hover:text-gray-300"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Menu Links */}
                        <div>
                            <p className="text-gray-400 mb-5 md:mb-8">MENU</p>
                            <ul className="space-y-3">
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => handleMenuClick(link.url)}
                                            className="group text-xl flex items-center gap-3 hover:text-gray-300 transition-colors"
                                        >
                                            <span className={cn(
                                                'size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all duration-300',
                                                COLORS[idx]
                                            )}>
                                                <MoveUpRight size={8} className="scale-0 group-hover:scale-100 transition-all duration-200" />
                                            </span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Contact Info */}
                <div className="w-full max-w-[300px] mx-8 sm:mx-auto text-white">
                    <p className="text-gray-400 mb-4">GET IN TOUCH</p>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="hover:underline transition-all hover:text-gray-300"
                    >
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;