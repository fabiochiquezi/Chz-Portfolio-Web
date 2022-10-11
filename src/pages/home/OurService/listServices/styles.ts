import { colors } from './../../../styles'

import styled from 'styled-components'

export const Ul = styled.ul`
    width: 100%;

    li {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        padding: 48px 10px 48px;

        @media (min-width: 768px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 40px 40px 34px;
        }

        @media (min-width: 1024px) {
            padding: 40px 20px 34px;
        }
    }

    .icon-svg {
        margin-bottom: 24px;
        width: 50px;

        @media (min-width: 768px) {
            margin-bottom: 0px;
        }
    }

    p {
        margin-bottom: 0px;
        font-size: 16px;

        @media (min-width: 768px) {
            width: 260px;
        }

        @media (min-width: 1024px) {
            width: 200px;
        }

        @media (min-width: 1280px) {
            width: 280px;
        }

        @media (min-width: 1536px) {
            width: 350px;
        }
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 4px;

        @media (min-width: 1024px) {
            font-size: 18px;
        }

        @media (min-width: 1280px) {
            font-size: 20px;
        }
    }

    li:nth-child(1) h3 {
        color: ${colors.color4};
    }
    li:nth-child(2) h3 {
        color: ${colors.color5};
    }
    li:nth-child(3) h3 {
        color: ${colors.color3};
    }
    li:nth-child(4) h3 {
        color: ${colors.color6};
    }
    li:nth-child(5) h3 {
        color: ${colors.color1};
    }
    li:nth-child(6) h3 {
        color: ${colors.color2};
    }
`
