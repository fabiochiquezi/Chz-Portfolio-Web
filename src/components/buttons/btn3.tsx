import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../../general/styles/colors'

const Btn = styled.a`
    color: ${colors.black1};
    background: ${colors.color1};
    color: #fff;
    width: 150px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    transition: all 250ms ease !important;

    &:hover {
        opacity: 0.7 !important;
        transform: scale(0.97) !important;
    }
`

type props = {
    text: string
    link: string
    btnDefault?: boolean
    blank?: boolean
    className?: string
}

const Btn3: React.FC<props> = ({
    text,
    link,
    btnDefault,
    blank,
    className,
    ...props
}) => {
    const defaultComponent = (
        <Btn
            href={link}
            target={blank ? '_blank' : ''}
            className={className}
            rel="noreferrer"
            {...props}
        >
            {text}
        </Btn>
    )
    const nextComponent = (
        <Link href={link}>
            <Btn className={className} {...props}>
                {text}
            </Btn>
        </Link>
    )

    if (btnDefault) return defaultComponent
    if (!btnDefault) return nextComponent

    return null
}

export default Btn3
