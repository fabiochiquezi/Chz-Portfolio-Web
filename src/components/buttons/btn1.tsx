import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

const Btn = styled.a`
    color: ${colors.white1};
    /* background: ${colors.color2}; */
    background: 'rgb(115,128,243)';
    background-image: linear-gradient(90deg, rgba(115,128,243,1) 0%, rgba(240,95,135,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    width: 130px;
    height: 55px;
    font-size: 20px;
    animation: pulse-black 1s ease infinite;

    &:hover{
        opacity: 0.8;
        animation: none !important;
        transform: scale(0.99);
    }

`

type props = {
    text: string,
    link: string,
    btnDefault?: boolean,
    blank?: boolean,
    className?: string
}

const Btn1: React.FC<props> = ({ text, link, btnDefault, blank, className, ...props }) => {
    const defaultComponent = (
        <Btn href={link} target={blank ? '_blank' : ''} className={className} rel="noreferrer" {...props}>
            {text}
        </Btn>
    )
    const nextComponent = <Link href={link}><Btn className={className} {...props}>{text}</Btn></Link>

    if (btnDefault) return defaultComponent
    if (!btnDefault) return nextComponent

    return null
}

export default Btn1
