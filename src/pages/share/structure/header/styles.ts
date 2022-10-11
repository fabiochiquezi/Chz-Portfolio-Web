import { colors } from './../../../styles'
import styled from 'styled-components'

type props = {
    menu: boolean
    menuStyle: number
}

export const Header = styled.header<props>`
    width: 100%;
    z-index: 100;
    overflow-y: ${props => (props.menu ? 'scroll' : 'visible')};
    background: ${props => (props.menuStyle === 1 ? colors.black1 : '#fff')};

    .container {
        display: flex;
        padding-top: 20px;
        padding-bottom: 18px;
        align-items: center;
        justify-content: space-between;
        border: none !important;
    }

    .background {
        width: 100%;
        height: 100vh;
        background: ${colors.black1};
        position: fixed;
        left: 0;
        top: 0;
        opacity: 0;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (min-width: 1024px) {
            width: 84.5%;
            position: relative;
        }

        @media (min-width: 1280px) {
            width: 87%;
        }

        @media (min-width: 1532px) {
            width: 89%;
        }
    }

    .menu {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        padding-top: 92px;

        @media (min-width: 1024px) {
            padding-top: 0px;
            position: static;
            height: auto;
            margin-top: -10px;
            display: flex !important;
            justify-content: space-between;
            align-items: center;
            opacity: 1 !important;
        }

        .menu-1 {
            @media (min-width: 1024px) {
                display: flex !important;
            }
        }

        a {
            width: 100%;
            font-size: 26px;
            padding: 20px 0px;
            text-align: center;
            display: inline-block;
            text-transform: uppercase;

            @media (min-width: 1024px) {
                padding: 0px !important;
                font-size: 14px;
                font-weight: bold;
                position: relative;
                top: 3px;
            }

            &:hover {
                color: ${props =>
                    props.menuStyle === 1 ? colors.white1 : colors.color1};
            }
        }

        li:not(.li-submenu) {
            transition: all 0.2s ease;

            &:hover {
                opacity: 0.6;
            }
        }

        li + li {
            border-top: 1px solid rgba(255, 255, 255, 0.15);

            @media (max-width: 1024px) {
                max-width: 80%;
                margin: 0 auto;
            }

            @media (min-width: 1024px) {
                border: none;
                margin-left: 25px;
            }
        }

        .active {
            font-weight: bold;
            position: relative;

            @media (min-width: 1024px) {
                &::after {
                    content: '';
                    display: inline-block;
                    width: 40px;
                    height: 3px;
                    /* height: 2px; */
                    /* border-radius: 50%; */
                    background-color: ${props =>
                        props.menuStyle === 1 ? colors.white1 : colors.color1};
                    position: absolute;
                    left: 50%;
                    margin-left: -20px;
                    top: 48px;
                }
            }
        }

        .li-submenu {
            @media (min-width: 1024px) {
                .active {
                    border-left: 4px solid ${colors.color1};

                    &::after {
                        display: none;
                    }
                }

                li:hover {
                    opacity: 1 !important;

                    .active {
                        border-left: 8px solid ${colors.color1};
                    }
                }
            }
        }
    }

    .icon-menu {
        position: relative;
        z-index: 100;

        @media (min-width: 1024px) {
            display: none;
        }
    }

    .li-submenu {
        position: relative;
        cursor: pointer;

        .span {
            display: none;

            @media (min-width: 1024px) {
                display: inline-block;
            }
        }

        &:hover {
            @media (min-width: 1024px) {
                .submenu {
                    display: block;
                }
            }
        }
    }

    .submenu {
        @media (min-width: 1024px) {
            display: none;
            position: absolute;
            left: 0px;
            top: 10px;
            margin-left: -37px;
            z-index: 1000;

            li:first-child {
                margin-top: 25px;
            }

            li a {
                background-color: #000;
                display: inline-block !important;
                padding: 16px 60px !important;

                &:hover {
                    border-left: 4px solid ${colors.color1};
                }
            }
        }
    }

    li:nth-child(1) a {
        color: ${colors.color4} !important;

        &::after {
            background-color: ${colors.color4} !important;
        }
    }

    li:nth-child(2) a {
        color: ${colors.color2} !important;

        &::after {
            background-color: ${colors.color2} !important;
        }
    }

    li:nth-child(3) a {
        color: ${colors.color6} !important;

        &::after {
            background-color: ${colors.color6} !important;
        }
    }

    li:nth-child(4) a {
        color: ${colors.color4} !important;

        &::after {
            background-color: ${colors.color4} !important;
        }
    }

    li:nth-child(5) a {
        color: ${colors.color5} !important;

        &::after {
            background-color: ${colors.color5} !important;
        }
    }

    .cell-phone {
        color: #fff;
    }

    .menu-right {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 1024px) {
            flex-direction: row;
        }

        ul {
            margin-top: 20px;
            @media (min-width: 1024px) {
                margin-top: 12px;
            }
        }

        li a {
            padding: 10px;
            margin-top: -10px;
        }

        li + li {
            border: none !important;
            margin: 0px 0px 0px 16px !important;
        }

        p {
            margin-top: 10px;
            font-size: 22px;

            @media (min-width: 1024px) {
                font-size: 15px;
                margin-top: 8px;
                margin-left: 33px;
            }
            @media (min-width: 1280px) {
                margin-left: 28px;
            }
        }
    }
`
