import Head from 'next/head'
import { Hero } from './hero'
import { TimeLine } from './timeLine'
import type { NextPage } from 'next'
import OurService from './ourService'
import OurApproach from './ourApproach'
import React, { useContext } from 'react'
import StructurePage from '../share/structure'
import { homeData } from '../../general/content/homeData'
import { GeneralContext } from '../share/context/general'
import { Testimonial } from '../share/sections/testimonial'

const Page: NextPage = () => {
    const { menuStyleProvider } = useContext(GeneralContext)
    menuStyleProvider.setMenuStyle(1)

    const { seo, hero, timeLine, ourService, ourApproach, testimonials } =
        homeData

    return (
        <div>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Head>

            <StructurePage>
                <Hero
                    message={hero.message}
                    content={hero.content}
                    button={hero.button}
                />
                <TimeLine
                    title={timeLine.title}
                    endMessage={timeLine.endMessage}
                    linkSeeMore={timeLine.linkSeeMore}
                    times={timeLine.times}
                    className="pt-9 md:pt-12 lg:pt-16"
                />
                <OurService
                    className="pt-24"
                    title={ourService.title}
                    subtitle={ourService.subtitle}
                    services={ourService.services}
                />
                <OurApproach
                    className="pt-24 mt-24 2xl:mt-20"
                    title={ourApproach.title}
                    works={ourApproach.approachs}
                />
                <Testimonial
                    title={testimonials.title}
                    slides={testimonials.items}
                    images={testimonials.images}
                />
            </StructurePage>
        </div>
    )
}

export default Page
