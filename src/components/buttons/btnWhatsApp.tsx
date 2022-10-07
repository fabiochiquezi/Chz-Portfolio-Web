import React from 'react'
import styled from 'styled-components'
import { colors } from '../../general/styles/colors'

const Btn = styled.a`
    color: ${colors.white1};
    background: ${colors.color6};
    width: 190px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
        opacity: 0.8;
        transform: scale(0.97);
    }

    @media (min-width: 1024px) {
        width: 200px;
        height: 65px;
        font-size: 20px;
    }

    img {
        margin-right: 16px;
    }
`

type props = {
    text: string
    link: string
    className?: string
}

const BtnWhatsApp: React.FC<props> = ({
    text = 'Fale Conosco',
    link,
    className,
    ...props
}) => {
    return (
        <Btn
            href="https://api.whatsapp.com/send?phone=5519983127035"
            target="_blank"
            rel="noreferrer"
            {...props}
            className={className}
        >
            <img src="./socialMedia/whatsappWhite.svg" alt="" />
            {text}
        </Btn>
    )
}

export default BtnWhatsApp
