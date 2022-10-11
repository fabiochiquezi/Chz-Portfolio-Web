import React from 'react'

type props = {
    fill?: string
    active: boolean
}

const Menu: React.FC<props> = ({ active, fill = 'white' }) => {
    return (
        <svg
            width="36"
            height="25"
            viewBox="0 0 36 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 3H36V0H0V3Z" fill={fill} />
            <path d="M0 14H36V11H0V14Z" fill={fill} />
            <path d="M0 25H36V22H0V25Z" fill={fill} />
        </svg>
    )
}

export default Menu
