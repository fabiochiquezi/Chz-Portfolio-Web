import React from 'react'
import styled from 'styled-components'
import Btn1 from '../../../../components/buttons/btn1'
import Title3 from '../../../../components/titles/title3'

type liProps = {
    mode?: string
    className?: string
}

const Li = styled.li<liProps>`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: ${props => (props.mode === 'dark' ? 'white' : 'black')};

    &::before {
        content: '';
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url('./icons/Icon-6.svg') center center no-repeat;
        margin-right: 12px;
    }
`

type props = {
    mode?: string
    className?: string
    points: string[]
    price: string
    cellphone: string
    textButton: string
    title?: string
    subtitle?: string
}

const BoxSalles1: React.FC<props> = ({
    mode = 'light',
    className,
    points,
    price,
    cellphone,
    textButton,
    title,
    subtitle,
    ...props
}) => {
    return (
        <section
            className={
                className +
                ' ' +
                (mode === 'dark' ? ' bg-neutral1' : ' bg-white')
            }
            {...props}
        >
            <div className="container flex flex-col items-center">
                {title && <Title3 title={title} className="mb-8" />}

                {subtitle && (
                    <p className="text-lg max-w-xl mb-6 lg:mb-16 mx-auto">
                        {subtitle}
                    </p>
                )}

                <div
                    className={
                        'w-full lg:w-2/3 xl:w-3/6 mx-auto p-6 md:p-10 rounded-2xl flex flex-col md:flex-row md:justify-between ' +
                        (mode === 'dark'
                            ? ' bg-black bg-opacity-40'
                            : ' bg-gray-100')
                    }
                >
                    <ul className="mb-8 md:mb-0">
                        {points &&
                            points.map((el, index) => (
                                <Li key={index} mode={mode}>
                                    {el}
                                </Li>
                            ))}
                    </ul>

                    <div className="flex flex-col items-center">
                        <p className="mb-8 md:mb-4 text-4xl font-bold text-blue-500">
                            {price}
                            <span
                                className={
                                    'font-normal ' +
                                    (mode === 'dark'
                                        ? ' text-white'
                                        : ' text-gray-500')
                                }
                            >
                                /mês
                            </span>
                        </p>
                        {/* <BtnWhatsApp text={textButton} link="" className="mb-3" /> */}
                        <Btn1 text="Contratar" link="/contratar" />

                        {/* <p className={'text-lg ' + (mode === 'dark' ? ' text-white' : ' text-gray-600')}>{cellphone}</p> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BoxSalles1
