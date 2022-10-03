import React, { useContext } from 'react'
import Footer from './footer'
import { Header } from './header'
import Divider2 from '../components/dividers/divider2'
import { GeneralContext } from '../context/general'

const StructurePage: React.FC = ({ children }) => {
    const { menuProvider } = useContext(GeneralContext)

    return (
        <>
            <Header />
                <div className="container">
                    {!menuProvider.menu && <Divider2 />}
                </div>

                {children}
            <Footer />
        </>
    )
}

export default StructurePage
