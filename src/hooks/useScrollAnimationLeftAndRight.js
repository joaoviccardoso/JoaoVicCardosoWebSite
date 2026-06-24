import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimationLeftAndRight(el, ids) {
    useLayoutEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);
    }, [el, ids])
}