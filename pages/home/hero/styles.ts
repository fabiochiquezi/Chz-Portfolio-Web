import styled from 'styled-components'
import { colors } from '../../styles'

export const Section = styled.section`
    background: ${colors.black1};
    padding: 38px 0px 190px;
    overflow: hidden;
    position: relative;

    @media (min-width: 425px) {
        padding: 38px 0px 190px;
    }

    @media (min-width: 640px) {
        padding: 42px 0px 200px;
    }

    @media (min-width: 1024px) {
        padding: 70px 0px 130px;
    }

    .content {
        position: relative;
    }

    .h1 {
        margin-bottom: 16px;
        position: relative;
        z-index: 10;
        margin-bottom: 24px;
        max-width: 350px;

        @media (min-width: 640px) {
            margin-bottom: 32px;
        }

        @media (min-width: 768px) {
            max-width: 75%;
            margin-bottom: 32px;
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
        line-height: 130%;
        max-width: 400px;
        position: relative;
        margin: 0 0 10px;
        color: ${colors.white1};

        @media (min-width: 640px) {
            font-size: 40px;
            text-align: left;
            margin-bottom: 16px;
        }

        @media (min-width: 768px) {
            max-width: 500px;
        }

        @media (min-width: 1024px) {
            font-size: 52px;
            line-height: 125%;
            max-width: 400px;
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
        max-width: 360px;

        @media (min-width: 640px) {
            font-size: 22px;
            margin-bottom: 64px;
        }

        @media (min-width: 768px) {
            max-width: 420px;
        }

        @media (min-width: 1024px) {
            font-size: 20px;
            margin-bottom: 28px;
        }
    }

    .photo-agency {
        position: absolute;
        right: -120px;
        bottom: -340px;
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
