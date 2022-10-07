import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Title3 from '../../../components/titles/title3'

const Section = styled.section`
    .slick-prev:before,
    .slick-next:before {
        content: '' !important;
    }

    .slick-prev,
    .slick-next {
        width: 30px;
        height: 30px;
        transition: all 0.2s ease;
        z-index: 100;
        opacity: 0.5;
        margin-top: -60px;

        &:hover {
            opacity: 0.2;
        }

        @media (min-width: 768px) {
            margin-top: -40px;
        }

        @media (min-width: 1024px) {
            width: 45px;
            height: 45px;
        }

        @media (min-width: 1280px) {
            width: 60px;
            height: 60px;
        }
    }

    .slick-next {
        background: url('./icons/arrow-right.svg') no-repeat center center;
    }

    .slick-prev {
        background: url('./icons/arrow-left.svg') no-repeat center center;
    }

    .slick-list,
    .slick-track {
        height: 360px;

        @media (min-width: 380px) {
            height: 245px;
        }

        @media (min-width: 1024px) {
            height: 320px;
        }

        @media (min-width: 1280px) {
            height: 290px;
        }
    }

    img {
        transition: all 0.2s ease;
        filter: saturate(0%);

        &:hover {
            filter: saturate(100%);
        }
    }
`

const section = 'py-16 md:py-20 lg:py-24'
const slideshowMessage =
    'lg:text-2xl px-4 md:px-16 lg:px-12 xl:px-32 pt-2 md:pt-7 md:text-lg text-center m-auto mb-8 lg:font-light text-gray-500 leading-7 lg:leading-10'
const slide = 'flex flex-col items-center text-center'
const slideshowWrapper =
    'flex flex-col items-center lg:mt-24 xl:mt-16 mt-20 md:flex-row md:gap-10 w-full justify-center xl:w-5/6 xl:mx-auto'
const logo = 'mb-12 md:mb-0'

type props = {
    className?: string
    slides: { message: string; name: string; position?: string }[]
    images: string[]
    title: string
}

const Testimonial2: React.FC<props> = ({
    slides,
    images,
    className,
    title,
    ...props
}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Section className={className ?? section} {...props}>
            <div className="container">
                <Title3
                    title={title}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="mb-4"
                />

                <a
                    className="text-blue-500 mb-8 text-center w-full inline-block hover:text-gray-500 font-bold"
                    href="https://www.google.com/search?q=chiquezi+agencia&rlz=1C1GCEA_enBR962BR964&sxsrf=AOaemvKp1JBsybq3gbdbf3F5aL0LVq0rLw%3A1632191398848&ei=pkNJYaWbM7S35OUPypqJqAY&oq=chiquezi+agencia&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECc6BwgjELADECc6BwgAEEcQsANKBQg8EgExSgQIQRgAUMgeWKEiYNkjaAFwAngAgAGFAYgB7QKSAQMwLjOYAQCgAQHIAQrAAQE&sclient=gws-wiz&ved=0ahUKEwilhqLkgo_zAhW0G7kGHUpNAmUQ4dUDCA4&uact=5#lrd=0x94c8c99f60608b43:0x34e7eab58f5e0c3d,1,,,"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Ver Comentários no Google
                </a>

                <div data-aos="fade" className="px-8 md:px-16 lg:w-5/6 mx-auto">
                    <Slider {...settings}>
                        {slides.map((el, index) => (
                            <div className={slide} key={index}>
                                <p className={slideshowMessage}>{el.message}</p>
                                <h3 className="font-bold mb-1">{el.name}</h3>
                                {el.position && <span>{el.position}</span>}
                            </div>
                        ))}
                    </Slider>
                </div>

                <ul className={slideshowWrapper}>
                    {images.map((el, key) => (
                        <li
                            key={key}
                            data-aos="fade"
                            data-aos-delay={150 * key}
                            className={logo}
                        >
                            <img src={el} alt="" className="opacity-75" />
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default Testimonial2
