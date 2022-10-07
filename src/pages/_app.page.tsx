import AOS from 'aos'
import 'aos/dist/aos.css'
import '../general/styles/tailwind.css'
import type { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import GlobalStyle from '../general/styles'
import { GeneralProvider } from './share/context/general'

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
