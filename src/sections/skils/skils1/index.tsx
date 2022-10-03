import React from 'react'
import Box2 from './box2'
import Title2 from '../../../components/titles/title2'

const section = 'py-16 md:py-20 lg:py-24'
const content = 'mt-20 flex flex-col items-center md:flex-row md:flex-wrap md:justify-start'

type props = {
    className?: string
    title: string,
    advantages: {image: string, title: string, percent: string}[]
}

const Skils1: React.FC<props> = ({ title, advantages, className }) => (
    <section className={className ?? section}>
        <div className="container">
            <Title2 title={title} className="text-blue-500" />

            <div className={content}>
                {advantages.map((el, index) => (
                    <Box2
                        key={index}
                        image={el.image}
                        title={el.title}
                        percentage={el.percent}
                        className='mb-20 md:px-6'
                        data-aos="fade"
                        data-aos-delay="150"
                    />
                ))}
            </div>
        </div>
    </section>
)

export default Skils1
