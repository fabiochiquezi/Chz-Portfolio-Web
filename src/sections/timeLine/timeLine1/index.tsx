import React from 'react'
import TimeBox from './TimeBox'
import styled from 'styled-components'
import Btn2 from '../../../components/buttons/btn2'
import Title3 from '../../../components/titles/title3'
import { colors } from '../../../styles/colors'

type propsStyle = {
    height: number,
    extraHeight: number
}

const Line = styled.div<propsStyle>`
    position: absolute;
    width: 1px;
    height: ${props => (props.height * 302) + props.extraHeight + 'px'};
    background-color: #ddd;

    @media (min-width: 1024px){
        width: 2px;
        height: ${props => (props.height * 360) + props.extraHeight + 'px'};
    }

    @media (min-width: 1280px){
        width: 2.5px;
        height: ${props => (props.height * 355) + props.extraHeight + 'px'};
    }

    @media (min-width: 1530px){
        width: 3px;
        height: ${props => (props.height * 382) + props.extraHeight + 'px'};
    }
`

type sectionProps = {
    mode: string
}

const Section = styled.section<sectionProps>`
    background: ${props => props.mode === 'light' ? colors.white1 : colors.black1}
`

type props = {
    className?: string,
    title: string,
    times: {title: string, subtitle: string, image: string, color: string}[],
    endMessage: string,
    linkSeeMore?: string,
    mode?: string
}

const TimeLine1: React.FC<props> = ({ className, title, times, endMessage, linkSeeMore, mode = 'light' }) => {
    return (
        <Section className={className} mode={mode}>
            <div className="container relative">
                <Title3
                    title={title}
                    data-aos="fade-up"
                    data-aos-delay="300"
                />

                <div className="content flex flex-col items-center w-full">
                    <Line className="line hidden md:inline-block" extraHeight={linkSeeMore ? 155 : 0} height={times.length} data-aos="fade-up"></Line>

                    {times.map((el, index) => (
                        <TimeBox
                            key={index}
                            title={el.title}
                            msg={el.subtitle}
                            color={el.color}
                            image={el.image}
                            className="mb-16"
                            style={index % 2 === 0 ? 2 : 1}
                            data-aos="fade-up"
                            data-aos-delay="250"
                            mode={mode}
                        />
                    ))}

                    <p className={'mb-6 lg:mb-8 2xl:mb-10 lg:mt-10 z-10 md:py-4 w-xs text-xl 2xl:text-2xl max-w-sm lg:max-w-md text-center' +
                        (mode === 'dark' ? ' bg-neutral1 text-white' : ' bg-white text-black')}
                        data-aos="fade-up" data-aos-delay="50"
                    >
                        {endMessage}
                    </p>

                    {linkSeeMore &&
                        <Btn2
                            text="Veja mais"
                            link={linkSeeMore}
                            data-aos="fade-up"
                        />
                    }
                </div>
            </div>
        </Section>
    )
}

export default TimeLine1
