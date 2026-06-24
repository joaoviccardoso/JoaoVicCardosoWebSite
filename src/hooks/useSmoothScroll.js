import { useEffect } from "react"
import Lenis from "lenis"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

export function useSmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        })

        lenis.on("scroll", ScrollTrigger.update)

        // Guarda a referência da função para remover corretamente no cleanup
        const rafCallback = (time) => {
            lenis.raf(time * 1000)
        }

        gsap.ticker.add(rafCallback)
        gsap.ticker.lagSmoothing(0)

        return () => {
            lenis.destroy()
            gsap.ticker.remove(rafCallback) // agora remove de verdade
        }
    }, [])
}