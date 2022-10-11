import Footer from './footer'
import { Header } from './header'
import React, { useContext } from 'react'
import Divider2 from '../components/dividers/divider2'
import { GeneralContext } from '../context/general'

const StructurePage: React.FC = ({ children }) => {
    const { menuProvider } = useContext(GeneralContext)

    return (
        <>
            <Header />

            {!menuProvider.menu && (
                <div className="container">
                    <Divider2 />
                </div>
            )}

            {children}
            <Footer />
        </>
    )
}

export default StructurePage
