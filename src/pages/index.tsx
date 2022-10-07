import Head from 'next/head'
import type { NextPage } from 'next'
import StructurePage from '../structure'
import React, { useContext } from 'react'
import Hero1 from '../sections/hero/hero1'
import OurService from '../sections/OurService'
import { homeData } from '../../content/homeData'
import OurApproach from '../sections/OurApproach'
import { GeneralContext } from '../context/general'
import TimeLine1 from '../sections/timeLine/timeLine1'
import Testimonial2 from '../sections/testimonials/testimonial2'
import BoxSalles1 from '../sections/boxSalles/boxSalles1'
import { structureData } from '../../content/structureData'

const Page: NextPage = () => {
    const { menuStyleProvider } = useContext(GeneralContext)
    menuStyleProvider.setMenuStyle(1)

    const {
        seo,
        hero,
        timeLine,
        ourService,
        ourApproach,
        testimonials,
        prices
    } = homeData

    const { general } = structureData

    return (
        <div>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Head>

            <StructurePage>
                <Hero1
                    message={hero.message}
                    content={hero.content}
                    button={hero.button}
                />
                <TimeLine1
                    title={timeLine.title}
                    endMessage={timeLine.endMessage}
                    linkSeeMore={timeLine.linkSeeMore}
                    times={timeLine.times}
                    className="pt-16 md:pt-20 xl:pt-24"
                />
                <OurService
                    className="pt-24 2xl:pt-40"
                    title={ourService.title}
                    subtitle={ourService.subtitle}
                    services={ourService.services}
                />
                <OurApproach
                    className="pt-24 mt-24 2xl:mt-20"
                    title={ourApproach.title}
                    works={ourApproach.approachs}
                />
                <BoxSalles1
                    textButton={prices.button}
                    cellphone={general.celphone}
                    price={prices.preco}
                    points={prices.points}
                    mode="dark"
                    className="pb-20 lg:pb-24"
                />
                <Testimonial2
                    title={testimonials.title}
                    slides={testimonials.items}
                    images={testimonials.images}
                />
            </StructurePage>
        </div>
    )
}

export default Page
