import { useEffect } from "react"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

export function useSmoothScroll() {
    useEffect(() => {
        const isMobile = window.innerWidth <= 768

        const lenis = new Lenis({
            duration: isMobile ? 0.8 : 4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: !isMobile,
            smoothTouch: isMobile,
            touchMultiplier: isMobile ? 1.2 : 1,
        })

        lenis.on("scroll", ScrollTrigger.update)

        let rafId

        const raf = (time) => {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }

        if (isMobile) {
            rafId = requestAnimationFrame(raf)
        } else {
            const rafCallback = (time) => lenis.raf(time * 1000)
            gsap.ticker.add(rafCallback)

            return () => {
                lenis.destroy()
                gsap.ticker.remove(rafCallback)
            }
        }

        return () => {
            lenis.destroy()
            cancelAnimationFrame(rafId)
        }
    }, [])
}