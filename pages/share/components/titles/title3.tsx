import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    /* margin-bottom: 64px;

    @media (min-width: 1280px){
        margin-bottom: 72px;
    } */

    h2 {
        font-size: 42px;
        font-weight: bold;
        margin-bottom: 30px;
        line-height: 125%;
        text-align: center;

        @media (min-width: 768px) {
            width: 420px;
            margin: 0 auto;
        }

        @media (min-width: 1024px) {
            width: 520px;
            font-size: 48px;
        }
    }

    p {
        font-size: 18px;
        line-height: 160%;

        @media (min-width: 1024px) {
            width: 300px;
        }

        @media (min-width: 1280px) {
            width: 360px;
        }
    }
`

type props = {
    title: string
    subtitle?: string
    className?: string
}

const Title3: React.FC<props> = ({ title, subtitle, className, ...props }) => (
    <Div className={className ?? 'mb-10 lg:mb-16'} {...props}>
        <h2 className="text-blue-500">{title}</h2>
        {subtitle && <p className="text-gray-400">{subtitle}</p>}
    </Div>
)

export default Title3
