// import Link from 'next/link'
import { animMenu } from './anim'
// import { useRouter } from 'next/router'
import { Header as Div } from './styles'
// import { LiSubmenu, LiSimple } from './li'
import Menu from '../../../public/icons/Menu'
import { handleOverflow } from './overflowFn'
import Logo1 from '../../components/logo/logo1'
import Btn1 from '../../components/buttons/btn1'
import React, { useContext, useEffect } from 'react'
import { GeneralContext } from '../../context/general'
// import { structureData } from '../../../content/structureData'

export const Header: React.FC = ({ ...props }) => {
    // const [delay, setDelay] = useState(true)
    // const router = useRouter()
    const { menuProvider, menuStyleProvider } = useContext(GeneralContext)

    function toggleMenu(e: React.MouseEvent) {
        e.preventDefault()
        menuProvider.setMenu(!menuProvider.menu)
        // if (delay) menuProvider.setMenu(!menuProvider.menu)
        // setDelay(false)

        // setTimeout(() => { setDelay(true) }, 2000)
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
            <div className="background"></div>
            <div className="container">
                <Logo1 size={0.6} />

                <nav>
                    <a href="#" className="icon-menu" onClick={toggleMenu}>
                        <Menu
                            active={menuProvider.menu}
                            fill={
                                menuStyleProvider.menuStyle === 1
                                    ? 'white'
                                    : 'black'
                            }
                        />
                    </a>

                    {/* <ul className="menu">
                        {structureData.menu.map((el, index) => {
                            const existSubmenu = el.submenu !== undefined
                            if (existSubmenu) {
                                return (<LiSubmenu key={index} name={el.name} submenu={el.submenu} />)
                            }

                            return (<LiSimple key={index} link={el.link} name={el.name} />)
                        })}

                        <li className="lg:hidden">
                            <Link href="/contratar">
                                <a className={router.pathname === '/cotnratar' ? 'active' : ''}>Contratar</a>
                            </Link>
                        </li>
                    </ul> */}

                    <div className="btn-contract">
                        <Btn1 text="Contratar" link="/contratar" />
                    </div>
                </nav>
            </div>
        </Div>
    )
}
