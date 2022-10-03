import React from 'react'
import styled from 'styled-components'
import ListServices from './listServices'
import Title1 from '../../components/titles/title1'

const Section = styled.section`
    .container{
        @media (min-width: 1024px){
            display: flex;
            justify-content: space-between;
            gap: 60px;
        }

        @media (min-width: 1530px){
            gap: 160px;
        }
    }
`

interface service {
    img: string,
    title: string,
    message: string
}

type props = {
    className?: string,
    title: string,
    subtitle: string,
    services: service[]
}

const OurService: React.FC<props> = ({ className, title, subtitle, services }) => (
    <Section className={className}>
        <div
            className="container"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
        >
            <Title1
                title={title}
                subtitle={subtitle}
            />

            <ListServices services={services} />
        </div>
    </Section>
)

export default OurService
