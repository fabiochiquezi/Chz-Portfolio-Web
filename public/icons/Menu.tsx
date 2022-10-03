import gsap from 'gsap'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
    transition: all .2s ease;
`

type props = {
    fill?: string
    active: boolean
}

const Menu: React.FC<props> = ({ active, fill = 'white' }) => {
    // useEffect(() => {
    //     console.log(active, 'aaaaaaaaaaaa')
    //     if (active) {
    //         gsap.to('.line-1', { rotateZ: 30 })
    //         gsap.to('.line-2', { rotateZ: -30 })
    //         return
    //     }
    //     gsap.to('.line-1', { rotateZ: 0 })
    //     gsap.to('.line-2', { rotateZ: 0 })
    // }, [active])

    return (
        <Svg width="46" height="20" viewBox="0 0 46 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="line-1" d="M0 5H46V0H0V5Z" fill={fill} />
            <path className="line-2" d="M0 20H46V15H0V20Z" fill={fill} />
        </Svg>
    )
}

export default Menu
