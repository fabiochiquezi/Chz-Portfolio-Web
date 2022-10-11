import React, { useState } from 'react'

type contextType = {
    menuProvider: {
        menu: boolean
        setMenu: React.Dispatch<React.SetStateAction<boolean>>
    }
    menuStyleProvider: {
        menuStyle: number
        setMenuStyle: React.Dispatch<React.SetStateAction<number>>
    }
}

const DEFAULT_PROVIDER = {
    menuProvider: {
        menu: false,
        setMenu: () => {}
    },
    menuStyleProvider: {
        menuStyle: 1,
        setMenuStyle: () => {}
    }
}

export const GeneralContext = React.createContext<contextType>(DEFAULT_PROVIDER)

export const GeneralProvider: React.FC = ({ children }) => {
    const [menu, setMenu] = useState(false)
    const [menuStyle, setMenuStyle] = useState(1)

    if (typeof window !== 'undefined') {
        window.addEventListener('resize', () => {
            if (window.outerWidth >= 1024) setMenu(false)
        })
    }

    return (
        <GeneralContext.Provider
            value={{
                menuProvider: { menu, setMenu },
                menuStyleProvider: { menuStyle, setMenuStyle }
            }}
        >
            {children}
        </GeneralContext.Provider>
    )
}
