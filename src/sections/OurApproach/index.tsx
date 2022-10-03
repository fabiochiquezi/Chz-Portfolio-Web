import React from 'react'
import Approach from './approach'
import { colors } from '../../styles/colors'
import Title2 from '../../components/titles/title2'
import Btn3 from '../../components/buttons/btn3'

type approach = {
    subtitle: string,
    title: string,
    content: string
}

type props = {
    className?: string,
    title: string,
    works: approach[]
}

const content = 'mt-20 gap-16 flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-between lg:gap-0 lg:mt-34 xl:gap-x-12 xl:justify-start'

const OurApproach: React.FC<props> = ({ className, title, works }) => (
    <section
        className={className}
        style={{ background: colors.black1 }}
    >
        <div className="container">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                <Title2
                    title={title}
                    data-aos="fade"
                    className="text-green-500 inline-block mb-6 lg:mb-0"
                />

                <Btn3 text="Mais Detalhes" link="/duvidas" className="lg:mt-7" data-aos="fade" />
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
