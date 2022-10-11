import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../logo'

const Section = styled.section`
    padding-top: 28px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        flex-direction: row;
        padding-top: 48px;
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
                © {new Date().getFullYear()} Chiquezi. All rights reserved.
            </p>

            {/* <BtnWhatsApp2 /> */}
        </Section>
    )
}

export default Footer2
