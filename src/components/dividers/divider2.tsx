import React from 'react'
import styled from 'styled-components'
import { colors } from '../../pages/styles'

const Div = styled.div`
    width: 100%;
    height: 1px;
    background: ${colors.gradient1};
    position: relative;
    margin-top: -2px;
    opacity: 0.5;
    z-index: 100;
`

const Divider2: React.FC = ({ ...props }) => (
    <Div className="border-divider"></Div>
)

export default Divider2
