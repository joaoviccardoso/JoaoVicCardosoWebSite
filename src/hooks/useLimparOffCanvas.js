import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function useLimparOffCanvas() {
    const location = useLocation()

    useEffect(() => {
        const offcanvasElement = document.getElementById('offcanvasExample')

        // Fecha e destrói instância do offcanvas se existir
        if (offcanvasElement) {
            const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvasElement)
            if (bsOffcanvas) bsOffcanvas.hide()
        }

        // Limpa o backdrop e classes do body imediatamente
        const limpar = () => {
            document.querySelectorAll('.offcanvas-backdrop').forEach(el => el.remove())
            document.body.classList.remove('modal-open', 'offcanvas-open')
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
        }

        // Executa agora e também após animação (300ms é o padrão Bootstrap)
        limpar()
        const timer = setTimeout(limpar, 350)

        return () => clearTimeout(timer)

    }, [location.pathname])
}