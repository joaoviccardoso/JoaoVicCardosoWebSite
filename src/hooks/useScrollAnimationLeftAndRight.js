import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useScrollAnimationLeftAndRight(el, ids) {
    useLayoutEffect(() =>{
        gsap.registerPlugin(ScrollTrigger);

        const isMobile = window.innerWidth <= 480;
        console.log(ids.map(ref => ref.current));

        const elements = ids.map(ref => ref.current).filter(Boolean);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el.current,
                    scrub: 1,
                    //markers:true,
                    start: "-50% 93%",
                    end: "top 60%",
                },
            });

            let onAndOff = false;

            elements.forEach((id)=> {
                if(onAndOff){
                    tl.fromTo(
                        id,
                        {
                            opacity: 0,
                            x: isMobile ? 100 : 300,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 1.3,
                            ease: "power2.out",
                        }
                    )
                    console.log(onAndOff)
                    onAndOff = false;
                } else{
                    tl.fromTo(
                        id,
                        {
                            opacity: 0,
                            x: isMobile ? -100 : -300,
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 1.3,
                            ease: "power2.out",
                        },
                        "+=0.9"
                    )

                    onAndOff = true;
                }
            })

            }, el);

        return () => ctx.revert();
    }, [el, ids])
}