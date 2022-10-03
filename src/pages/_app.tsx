import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/tailwind.css'
import GlobalStyle from '../styles'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { GeneralProvider } from '../context/general'

function MyApp({ Component, pageProps }: AppProps) {
    // Plugin show when scroll
    useEffect(() => {
        AOS.init({ duration: 900 })
    }, [])

    return (
        <GeneralProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </GeneralProvider>
    )
}
export default MyApp
