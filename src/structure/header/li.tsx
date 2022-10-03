import React, { useContext } from 'react'
import Link from 'next/link'
import { GeneralContext } from '../../context/general'
import { useRouter } from 'next/router'

type propsLiSubmenu = {
    name: string,
    submenu: {name: string, link: string}[]
}

export const LiSubmenu: React.FC<propsLiSubmenu> = ({ name, submenu }) => {
    const { menuProvider } = useContext(GeneralContext)
    const router = useRouter()

  return (
    <li className="li-submenu"> <a className="span">{name}</a>
        <ul className="submenu">
            {submenu.map((el, k) => (
                <li key={k}>
                    <Link href={el.link}>
                        <a
                            className={router.pathname === el.link ? 'active' : ''}
                            onClick={() => { menuProvider.setMenu(false) }}
                        >{el.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </li>
  )
}

type propsLiSimple = {
    name: string,
    link: string
}

export const LiSimple: React.FC<propsLiSimple> = ({ name, link }) => {
    const { menuProvider } = useContext(GeneralContext)
    const router = useRouter()

    return (
        <li>
            <Link href={link}>
                <a
                    className={router.pathname === link ? 'active' : ''}
                    onClick={() => { menuProvider.setMenu(false) }}
                >{name}</a>
            </Link>
        </li>
    )
}
