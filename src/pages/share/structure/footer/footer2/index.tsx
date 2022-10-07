import React from 'react'
import styled from 'styled-components'
import BtnWhatsApp2 from '../../../../../components/buttons/btnWhatsApp2'
import { Logo } from '../../Logo'

const Section = styled.section`
    padding-top: 48px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        flex-direction: row;
    }

    a {
        order: 3;
    }

    .copy {
        margin-bottom: 32px;
        margin-top: 32px;
        order: 2;

        @media (min-width: 1024px) {
            margin: 0px;
            order: 4;
        }
    }

    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

const Footer2: React.FC = ({ ...props }) => {
    return (
        <Section {...props}>
            <Logo size={0.6} />

            <p className="copy">
                © 2021 Chiquezi. Todos os direitos reservados.
            </p>

            <BtnWhatsApp2 />
        </Section>
    )
}

export default Footer2
