import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "./hooks/lenisStore"

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // mata qualquer ScrollTrigger "sobrando" da página anterior
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const lenis = getLenis();

    if (lenis) {
      // reseta a posição interna do Lenis instantaneamente,
      // sem animação e sem competir com o RAF dele
      lenis.scrollTo(0, { immediate: true, force: true });
    } else {
      // fallback caso o Lenis ainda não tenha montado
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;