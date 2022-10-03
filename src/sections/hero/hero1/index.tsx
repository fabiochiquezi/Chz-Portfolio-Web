import React from 'react'
import { Section } from './styles'
import Btn1 from '../../../components/buttons/btn1'

type props = {
    message: string,
    content: string,
    button: string,
    className?: string
}

const Hero1: React.FC<props> = ({ message, content, button, className }) => (
    <Section className={className}>
        <div className="container mx-auto">
            <div className="content">

                <div className="h1" data-aos="fade-up" data-aos-delay="150">
                    <img src="./logo/logo2.svg" alt="" />
                </div>

                <div data-aos="fade-up" data-aos-delay="250">
                    <h4 >{message}</h4>

                    <div className="p-content">
                        <p>{content}</p>
                    </div>

                    {/* <BtnWhatsApp text={button} link="/trabalho" /> */}
                    <Btn1 text="Contratar" link="/contratar" />
                </div>

                <div className="photo-agency flex justify-center items-center" data-aos="fade-up" data-aos-delay="450">
                    <img src="./hero/illustration1.svg" alt="agency photo" />
                </div>
            </div>
        </div>
    </Section>
)

export default Hero1