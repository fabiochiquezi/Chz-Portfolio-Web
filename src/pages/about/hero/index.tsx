import React from 'react'

import Social1 from '../../../components/socialMedia/social1'
import { colors } from '../../styles'

const h1 =
    'text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold mb-1 lg:mb-2 2xl:mb-0 text-white'
const h3 = 'text-lg lg:text-xl lg:w-72 xl:text-2xl w-44 xl:w-60 text-white'
const h4 = 'text-lg lg:text-sm xl:text-sm mb-2 lg:mb-4 2xl:mb-3 text-purple-500'
const messages = 'text-base lg:text-2xl 2xl:text-3xl 2xl:w-5/6 text-white'

const section = 'py-16 md:py-20 lg:py-24'
const container =
    'container flex flex-col items-center md:flex-row lg:items-start'

const wrapImg =
    'w-100 md:w-1/2 flex justify-end xl:w-auto order-1 md:order-2 mb-12 md:mb-0'
const img =
    'w-72 md:w-96 lg:w-auto xl:w-9/12 md:mr-16 lg:mr-0 xl:mr-16 xl:mt-5 2xl:mr-20'

type props = {
    className?: string
    name: string
    position: string
    block1: { category: string; message: string }
    block2: { category: string; address: string; email: string; phone: string }
    image: string
}

const Hero: React.FC<props> = ({
    name,
    position,
    block1,
    block2,
    image,
    className
}) => {
    return (
        <section
            style={{ background: colors.black1 }}
            className={className ?? section}
        >
            <div className={container}>
                <div className="md:w-1/2 order-2 md:order-1 lg:pt-2 xl:w-3/6">
                    <div
                        data-aos="fade"
                        data-aos-delay="150"
                        className="mb-10 lg:mb-20 xl:mb-28"
                    >
                        <h1 className={h1}>{name}</h1>
                        <h3 className={h3}>{position}</h3>
                    </div>

                    <div data-aos="fade" data-aos-delay="300">
                        <div className="md:w-1/2 lg:w-5/6 mb-10 lg:mb-12 xl:mb-20 2xl:mb-16 xl:w-full">
                            <h4 className={h4}>{block1.category}</h4>
                            <p className={messages}>{block1.message}</p>
                        </div>

                        <div className="md:w-1/2 lg:w-5/6 xl:w-full">
                            <h4 className={h4}>{block2.category}</h4>
                            <p
                                className={
                                    messages + ' mb-4 lg:mb-4 text-white'
                                }
                            >
                                {block2.address}
                                <br /> {block2.email} <br />
                                {block2.phone}
                            </p>

                            <Social1
                                style={2}
                                facebook="https://www.facebook.com/fabio.chiquezi/"
                                instagram="https://www.instagram.com/accounts/onetap/?next=%2F"
                                linkedin="https://www.linkedin.com/in/f%C3%A1bio-chiquezi-b40607217/"
                                whatsapp="https://api.whatsapp.com/send?phone=5519983127035"
                                size={22}
                                marginLeft={14}
                            />
                        </div>
                    </div>
                </div>

                <div data-aos="fade" data-aos-delay="150" className={wrapImg}>
                    <img src={image} className={img} alt="" />
                </div>
            </div>
        </section>
    )
}

export { Hero }
