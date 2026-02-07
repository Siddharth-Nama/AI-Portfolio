"use client"

import SectionTitle from "@/components/SectionTitle"
import { ACHIEVEMENTS } from "@/lib/data"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Achievements = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            gsap.from(".achievement-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out",
            })
        },
        { scope: containerRef },
    )

    return (
        <section className="py-section" id="achievements">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Achievements" />
                
                <div className="mt-12 space-y-4">
                    {ACHIEVEMENTS.map((item, index) => (
                        <div key={index} className="achievement-item flex items-start gap-4 p-4 bg-card/30 rounded-lg md:items-center">
                             <div className="mt-1 md:mt-0 min-w-[24px]">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold">
                                    {index + 1}
                                </span>
                             </div>
                            <p className="text-base md:text-lg text-gray-300">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achievements
