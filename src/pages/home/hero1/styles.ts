import { colors } from '../../../general/styles/colors'
import styled from 'styled-components'

export const Section = styled.section`
    background: ${colors.black1};
    padding: 64px 0px 250px;
    overflow: hidden;
    position: relative;

    @media (min-width: 425px) {
        padding: 64px 0px 200px;
    }

    @media (min-width: 640px) {
        padding: 64px 0px 320px;
    }

    @media (min-width: 768px) {
        padding: 64px 0px 280px;
    }

    @media (min-width: 1024px) {
        padding: 80px 0px 140px;
    }

    @media (min-width: 1280px) {
        padding: 80px 0px 130px;
    }

    @media (min-width: 1280px) {
        padding: 80px 0px 140px;
    }

    .content {
        position: relative;
    }

    .h1 {
        margin-bottom: 64px;
        position: relative;
        z-index: 10;
        margin-bottom: 24px;

        @media (min-width: 640px) {
            margin-bottom: 120px;
        }

        @media (min-width: 768px) {
            max-width: 75%;
        }

        @media (min-width: 1024px) {
            max-width: 52%;
        }

        @media (min-width: 1280px) {
            max-width: 45%;
        }

        @media (min-width: 1536px) {
            max-width: 42%;
        }
    }

    h4 {
        z-index: 10;
        font-size: 36px;
        font-weight: bold;
        line-height: 150%;
        max-width: 400px;
        position: relative;
        margin: 0 0 48px;
        color: ${colors.white1};

        @media (min-width: 640px) {
            font-size: 40px;
            text-align: left;
            margin-bottom: 16px;
            max-width: 100%;
        }

        @media (min-width: 1024px) {
            font-size: 52px;
            margin-bottom: 48px;
            line-height: 125%;
            max-width: 400px;
        }

        @media (min-width: 1280px) {
            max-width: 600px;
            font-size: 60px;
            line-height: 110%;
            margin-bottom: 42px;
        }
    }

    .p-content {
        width: 100%;

        @media (min-width: 640px) {
            width: 480px;
        }

        @media (min-width: 1024px) {
            width: 460px;
        }

        @media (min-width: 1300px) {
            width: 540px;
        }
    }

    p {
        font-size: 18px;
        color: ${colors.white1};
        line-height: 160%;
        margin-bottom: 24px;
        position: relative;
        z-index: 10;

        @media (min-width: 640px) {
            font-size: 22px;
            margin-bottom: 64px;
        }

        @media (min-width: 1024px) {
            font-size: 20px;
            margin-bottom: 24px;
        }
        @media (min-width: 1280px) {
            font-size: 20px;
            margin-bottom: 28px;
        }
    }

    .photo-agency {
        position: absolute;
        right: -120px;
        bottom: -400px;
        width: 420px;

        @media (min-width: 640px) {
            right: -180px;
            bottom: -400px;
            width: 600px;
        }

        @media (min-width: 768px) {
            right: -80px;
        }

        @media (min-width: 1024px) {
            right: -260px;
            top: 80px;
            width: 800px;
            display: block;
        }

        @media (min-width: 1280px) {
            right: -250px;
            top: 60px;
            width: 960px;
        }

        @media (min-width: 1536px) {
            right: -40px;
            top: 70px;
            width: 960px;
        }

        @media (min-width: 1720px) {
            right: -30px;
            top: 70px;
        }
    }
`
