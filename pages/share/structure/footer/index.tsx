import React from 'react'
import Footer1 from './footer1'
import Footer2 from './footer2'
import styled from 'styled-components'
import { colors } from '../../../styles'
import Divider1 from '../../components/dividers/divider1'

const FooterDiv = styled.footer`
    background: ${colors.black1};
    color: #fff;
    padding: 48px 0px;

    @media (min-width: 768px) {
        padding-top: 60px;
        padding-bottom: 32px;
    }

    @media (min-width: 1024px) {
        padding-top: 120px;
    }
`

const Footer: React.FC = ({ ...props }) => {
    return (
        <FooterDiv {...props}>
            <div className="container">
                <Footer1 />
            </div>

            <Divider1 />

            <div className="container">
                <Footer2 />
            </div>
        </FooterDiv>
    )
}

export default Footer
