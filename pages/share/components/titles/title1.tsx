import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    margin-bottom: 32px;

    @media (min-width: 768px){
        margin-bottom: 60px;
    }

    @media (min-width: 1024px){
        margin-bottom: 0px;
    }

    h1{
        font-size: 54px;
        font-weight: bold;
        margin-bottom: 30px;
        line-height: 110%;

        @media (min-width: 1024px){
            width: 300px;
            font-size: 54px;
            margin-bottom: 38px;
            line-height: 110%;
        }

        @media (min-width: 1280px){
            width: 360px;
            font-size: 80px;
            line-height: 110%;
        }
    }

    p{
        font-size: 18px;
        line-height: 160%;

        @media (min-width: 1024px){
            width: 300px;
        }

        @media (min-width: 1280px){
            width: 360px;
        }
    }
`

type props = {
    title: string,
    subtitle: string
}

const Title1: React.FC<props> = ({ title, subtitle, ...props }) => (
    <Div {...props}>
        <h1 className="text-blue-500">{title}</h1>
        <p className="text-gray-500">{subtitle}</p>
    </Div>
)

export default Title1
