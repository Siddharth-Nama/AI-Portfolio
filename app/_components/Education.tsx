"use client"

import SectionTitle from "@/components/SectionTitle"
import { EDUCATION } from "@/lib/data"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none",
                },
            })

            tl.from(".education-card", {
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
            })
        },
        { scope: containerRef },
    )

    return (
        <section className="py-section" id="education">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Education" />
                
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {EDUCATION.map((item, index) => (
                        <div key={index} className="education-card p-6 bg-[#1B3C53] rounded-lg shadow-sm border border-border/50 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold mb-2 text-foreground">{item.institution}</h3>
                            <p className="text-lg text-primary mb-1">{item.degree}</p>
                            <p className="text-sm text-muted-foreground mb-4">{item.duration}</p>
                            <p className="text-sm text-gray-300 mb-2 font-bold text-foreground">{item.details1}</p>
                            
                            <p className="text-sm text-gray-300">{item.details2}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
