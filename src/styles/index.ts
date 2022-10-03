import { colors } from './colors'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    a{
        transition: all .25s ease;
    }

    body::-webkit-scrollbar {
        width: 6px;
        border: none;
        outline: none;
        background-color: #0C0F14;
    }
    body::-webkit-scrollbar-track {
        border: none;
        outline: none;
        /* background-color: #0C0F14; */
    }
    body::-webkit-scrollbar-thumb {
        /* background-color: #0C0F14; */
        background-color: ${colors.color6};
        border: none;
        outline: none;
    }


    body, html{
        overflow-x: hidden;
    }

    html, body{
        font-size: 16px;
    }

    h1 { font-size: 6em}
    h2 { font-size: 3em}
    h3 { font-size: 1.5em}
    h4 { font-size: 1.2em}
    h5 { font-size: 1.1em}
    h6 { font-size: 1.05em}

    @keyframes pulse-black {
        0% {
            transform: scale(0.98);
        }

        70% {
            transform: scale(1);
        }

        100% {
            transform: scale(0.98);
        }
    }
`
export default GlobalStyle
