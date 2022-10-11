import Link from 'next/link'
import { Logo } from '../logo'
import { animMenu } from './anim'
import { useRouter } from 'next/router'
import { Header as Div } from './styles'
import { handleOverflow } from './overflowFn'
import Menu from '../../../../public/icons/Menu'
import React, { useContext, useEffect } from 'react'
import { GeneralContext } from '../../context/general'
import Social1 from '../../components/socialMedia/social1'

export const Header: React.FC = ({ ...props }) => {
    const router = useRouter()
    const { menuProvider, menuStyleProvider } = useContext(GeneralContext)

    const isActive = (path: string) => {
        if (router.pathname === path) return 'active'
        return ''
    }

    useEffect(() => {
        const matchMedia = window.matchMedia('(max-width: 1024px)').matches
        if (matchMedia) {
            animMenu(menuProvider.menu)
            handleOverflow(menuProvider.menu)
        }
    }, [menuProvider.menu])

    return (
        <Div
            {...props}
            menu={menuProvider.menu}
            menuStyle={menuStyleProvider.menuStyle}
            className="header-site"
        >
            <div className="container">
                <Logo size={0.6} />

                <nav>
                    <a
                        href="#"
                        className="icon-menu"
                        onClick={() => menuProvider.setMenu(state => !state)}
                    >
                        <Menu
                            active={menuProvider.menu}
                            fill={
                                menuStyleProvider.menuStyle === 1
                                    ? 'white'
                                    : 'black'
                            }
                        />
                    </a>

                    <ul className="menu">
                        <div className="menu-1">
                            <li>
                                <Link href="/home">
                                    <a
                                        className={isActive('/home')}
                                        onClick={() => {
                                            menuProvider.setMenu(false)
                                        }}
                                    >
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a
                                        className={isActive('/about')}
                                        onClick={() => {
                                            menuProvider.setMenu(false)
                                        }}
                                    >
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li className="li-submenu">
                                <a className="span">products</a>
                                <ul className="submenu">
                                    <li>
                                        <Link href="/products/website">
                                            <a
                                                className={isActive(
                                                    '/products/website'
                                                )}
                                                onClick={() => {
                                                    menuProvider.setMenu(false)
                                                }}
                                            >
                                                WebSite
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/questions">
                                    <a
                                        className={isActive('/questions')}
                                        onClick={() => {
                                            menuProvider.setMenu(false)
                                        }}
                                    >
                                        Questions
                                    </a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/contact">
                                    <a
                                        className={isActive('/contact')}
                                        onClick={() => {
                                            menuProvider.setMenu(false)
                                        }}
                                    >
                                        Contact
                                    </a>
                                </Link>
                            </li> */}
                        </div>
                        <div className="menu-right">
                            <Social1
                                style={2}
                                facebook="https://www.facebook.com/fabio.chiquezi/"
                                instagram="https://www.instagram.com/accounts/onetap/?next=%2F"
                                linkedin="https://www.linkedin.com/in/f%C3%A1bio-chiquezi-b40607217/"
                                whatsapp="https://api.whatsapp.com/send?phone=5519983127035"
                                size={22}
                                marginLeft={14}
                            />
                            <p className="cell-phone">+55 19 983-127-035</p>
                        </div>
                    </ul>
                </nav>
            </div>
        </Div>
    )
}
