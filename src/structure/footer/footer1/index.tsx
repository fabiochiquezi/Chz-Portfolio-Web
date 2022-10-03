import React from 'react'
import Link from 'next/link'
import { Section } from './styles'
// import Social1 from '../../../components/socialMedia/social1'
import { structureData } from '../../../../content/structureData'
import BtnWhatsApp from '../../../components/buttons/btnWhatsApp'

const Footer1: React.FC = ({ ...props }) => {
    const { general, menu } = structureData

    return (
        <Section {...props}>
            <div className="pt pt-1">
                <h4>Eleve seu negócio para a era digital!</h4>
                <h4>Deixe-nos cuidar da sua <span className="text-green-500">identidade digital!</span></h4>
            </div>

            <div className="pt pt-2">
                <h6 className="text-green-500">Links</h6>
                <ul className="links">
                    {menu.map((el, index) => {
                        if (el.submenu) {
                            return el.submenu.map((item, k) => (
                                <li key={k}>
                                    <Link href={item.link}>
                                        <a>{item.name}</a>
                                    </Link>
                                </li>
                            ))
                        }

                        return (
                            <li key={index}>
                                <Link href={el.link}>
                                    <a>{el.name}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="pt pt-3">
                <h6 className="text-green-500">Contato</h6>
                <p>{general.addressSimple}</p>
                <p>{general.email}</p>
                <BtnWhatsApp text="Fale Conosco" link="/" className="mt-2" />
            </div>
        </Section>
    )
}

export default Footer1
