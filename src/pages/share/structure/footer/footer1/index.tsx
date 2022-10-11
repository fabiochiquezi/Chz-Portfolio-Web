import React from 'react'
import Link from 'next/link'
import { Section } from './styles'
import { structureData } from '../../../../../general/content/structureData'
import BtnWhatsApp from '../../../../../components/buttons/btnWhatsApp'

const Footer1: React.FC = ({ ...props }) => {
    const { general } = structureData

    return (
        <Section {...props}>
            <div className="pt pt-1">
                <h4>Elevate your business into the digital age!</h4>
                <h4>
                    Let us take care of your
                    <span className="text-green-500">digital identity!</span>
                </h4>
            </div>

            <div className="pt pt-2">
                <h6 className="text-green-500">Links</h6>
                <ul className="links">
                    <li>
                        <Link href="/home">
                            <a>home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>about</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products/website">
                            <a>product - website</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/questions">
                            <a>questions</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>contact</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="pt pt-3">
                <h6 className="text-green-500">Contact</h6>
                <p>+55 19 983-127-035</p>
                <p>{general.addressSimple}</p>
                <p>{general.email}</p>
                <BtnWhatsApp
                    text="Fale Conosco"
                    link="https://api.whatsapp.com/send?phone=5519983127035"
                    className="mt-2"
                />
            </div>
        </Section>
    )
}

export default Footer1
