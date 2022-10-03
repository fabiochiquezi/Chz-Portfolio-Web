import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

const Div = styled.div`
        width: 100%;
        height: 2px;
        background: ${colors.gradient1rgb};
        background: ${colors.gradient1};
        position: relative;
        margin-top: -2px;
        z-index: 100;
`

const Divider1: React.FC = ({ ...props }) => (
    <div className="container" {...props}>
        <Div className="border-divider"></Div>
    </div>
)

export default Divider1
