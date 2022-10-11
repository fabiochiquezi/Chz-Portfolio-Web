import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import LogoImage from '../../../../public/logo/logo.svg'

type props = {
    size: number
}

const A = styled.a<props>`
    position: relative;
    z-index: 100;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    img {
        width: ${props => props.size * 140 + 'px'};

        @media (min-width: 1024px) {
            width: ${props => props.size * 140 + 'px'};
        }
    }
`

const Logo: React.FC<props> = ({ size = 1, ...props }) => (
    <Link href="/">
        <A className="logo" size={size} {...props}>
            <Image src={LogoImage} alt="" />
        </A>
    </Link>
)

export { Logo }
