import React from 'react'
import Approach from './approach'
import { colors } from '../../../styles'
import Btn3 from '../../components/buttons/btn3'
import Title2 from '../../components/titles/title2'

type approach = {
    subtitle: string
    title: string
    content: string
}

type props = {
    className?: string
    title: string
    works: approach[]
    seeMoreBtn?: boolean
}

const content =
    'mt-20 pb-20 lg:pb-0 gap-16 flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-between lg:gap-0 lg:mt-34 xl:gap-x-12 xl:justify-start'

const OurApproach: React.FC<props> = ({
    className,
    title,
    works,
    seeMoreBtn = true
}) => (
    <section className={className} style={{ background: colors.black1 }}>
        <div className="container">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                <Title2
                    title={title}
                    data-aos="fade"
                    className="text-green-500 inline-block mb-6 lg:mb-0"
                />

                {seeMoreBtn && (
                    <Btn3
                        text="CONTACT"
                        link="/contact"
                        className="lg:mt-7"
                        data-aos="fade"
                    />
                )}
            </div>

            <div className={content}>
                {works.map((el, index) => (
                    <Approach
                        key={index}
                        subtitle={el.subtitle}
                        title={el.title}
                        content={el.content}
                        data-aos="fade"
                    />
                ))}
            </div>
        </div>
    </section>
)

export default OurApproach
