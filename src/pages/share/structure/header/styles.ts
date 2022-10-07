import { colors } from '../../../../general/styles/colors'
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
        padding-top: 26px;
        padding-bottom: 26px;
        align-items: center;
        justify-content: space-between;
    }

    .background {
        width: 100%;
        height: 100vh;
        background: ${colors.black1};
        position: fixed;
        left: 0;
        top: 0;
        opacity: 0;
        display: none;

        @media (min-width: 1024px) {
            display: none;
        }
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (min-width: 1024px) {
            width: 82%;
            position: relative;
        }

        @media (min-width: 1280px) {
            width: 88%;
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
        padding-top: 125px;

        @media (min-width: 1024px) {
            display: flex !important;
            padding-top: 0px;
            position: static;
            height: auto;
            margin-top: -10px;
        }

        a {
            width: 100%;
            font-size: 28px;
            padding: 20px 0px;
            text-align: center;
            display: inline-block;
            text-transform: uppercase;

            @media (min-width: 1024px) {
                padding: 0px !important;
                font-size: 14px;
                font-weight: bold;
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
            border-top: 1px solid ${colors.white1};

            @media (max-width: 1024px) {
                max-width: 80%;
                margin: 0 auto;
            }

            @media (min-width: 1024px) {
                border: none;
                margin-left: 30px;
            }
        }

        .active {
            font-weight: bold;
            position: relative;

            @media (min-width: 1024px) {
                &::after {
                    content: '';
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: ${props =>
                        props.menuStyle === 1 ? colors.white1 : colors.color1};
                    position: absolute;
                    left: 50%;
                    margin-left: -2.5px;
                    top: 31px;
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

    .social-media,
    .btn-contract {
        display: none;
    }

    .social-media {
        @media (min-width: 1280px) {
            display: flex;
        }
    }

    .btn-contract {
        @media (min-width: 1024px) {
            display: flex;
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
`
