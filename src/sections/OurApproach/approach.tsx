import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

const Div = styled.div`
    padding-top: 60px;
    border-top: 2px solid ${colors.white1};
    width: 100%;

    @media (min-width: 1024px){
        width: 48%;
        height: 380px;
    }

    @media (min-width: 1280px){
        width: 30%;
        height: 380px;
    }

    h4{
        font-size: 18px;
        font-weight: bold;
    }

    h3{
        font-size: 48px;
        font-weight: bold;
        color: ${colors.white1};
        margin-bottom: 32px;
    }

    p{
        font-size: 17px;
        color: #fff;
        margin-bottom: 0px;
        line-height: 160%;

        @media(min-width: 1024px){
            font-size: 17px;
        }
    }
`

type props = {
    subtitle: string,
    title: string,
    content: string
}

const Approach: React.FC<props> = ({ subtitle, title, content, ...props }) => (
    <Div {...props}>
        <h4 className="text-green-500">{subtitle}</h4>
        <h3>{title}</h3>
        <p>{content}</p>
    </Div>
)

export default Approach
