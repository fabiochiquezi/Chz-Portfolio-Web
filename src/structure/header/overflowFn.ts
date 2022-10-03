export function handleOverflow(isMenuOpen: boolean) {
    const html = document.getElementsByTagName('html')[0]
    const matchMedia = window.matchMedia('(max-width: 1024px)').matches

    if (!matchMedia) {
        html.style.overflowY = 'scroll'
        return
    }

    if (isMenuOpen && matchMedia) {
        html.style.overflowY = 'hidden'
        return
    }

    html.style.overflowY = 'scroll'
}
