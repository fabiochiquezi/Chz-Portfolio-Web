import { createGlobalStyle } from 'styled-components'

export const colors = {
    color1: '#6348B3',
    color2: '#DA37A7',
    color3: '#EF5F87',
    color4: '#7380F3',
    color5: '#F35810',
    color6: '#00AB5F',
    color7: '#FDD039',

    gradient1rgb: 'rgb(115,128,243)',
    gradient1:
        'linear-gradient(90deg, rgba(115,128,243,1) 0%, rgba(240,95,135,1) 100%)',

    black1: '#0C0F14',
    white1: '#fff',
    gray1: '#666666'
}

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
