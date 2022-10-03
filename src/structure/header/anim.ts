import gsap from 'gsap'

export function animMenu(menu: boolean) {
    if (menu && matchMedia) {
        gsap.set('.background', { opacity: 1, duration: 0.8 })
        gsap.timeline()
            .set('.header-site', { height: '100%', position: 'fixed' })
            .set('.menu', { opacity: 1, display: 'block', duration: 1 })
        return
    }

    gsap.timeline()
        .set('.menu', { opacity: 0, display: 'none' })
        .set('.header-site', { height: 'auto', position: 'relative' })
        .set('.background', { opacity: 0 })
        .set('.background', { transform: 'scale(0)' })
}

// export function animMenu(menu: boolean) {
//     if (menu && matchMedia) {
//         gsap.to('.background', { opacity: 1, duration: 0.8 })
//         gsap.timeline()
//             .set('.header-site', { height: '100%', position: 'fixed' })
//             .to('.menu', { opacity: 1, display: 'block', duration: 1 })
//         return
//     }

//     gsap.timeline()
//         .to('.menu', { opacity: 0, display: 'none' })
//         .set('.header-site', { height: 'auto', position: 'relative' })
//         .to('.background', { opacity: 0 })
//         .set('.background', { transform: 'scale(0)' })
// }
