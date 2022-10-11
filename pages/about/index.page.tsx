import Head from 'next/head'
import { Skils } from './skils'
import { Hero } from './hero'
import { Tags } from './tags'
import type { NextPage } from 'next'
import React, { useContext } from 'react'
import StructurePage from '../share/structure'
import { GeneralContext } from '../share/context/general'
import Divider1 from '../share/components/dividers/divider1'
import { Testimonial } from '../share/sections/testimonial'
import { quemSomosData } from '../../content/quemSomosData'

const Page: NextPage = () => {
    const { menuStyleProvider } = useContext(GeneralContext)
    menuStyleProvider.setMenuStyle(1)
    const { seo, hero, tags, advantage, testimonials } = quemSomosData

    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Head>

            <StructurePage>
                <Hero
                    name={hero.name}
                    position={hero.position}
                    block1={hero.block1}
                    block2={hero.block2}
                    image={hero.image}
                />
                <Tags title={tags.title} tags={tags.listTags} />
                <Divider1 />
                <Skils
                    title={advantage.title}
                    advantages={advantage.advantages}
                />
                <Divider1 />
                <Testimonial
                    title={testimonials.title}
                    slides={testimonials.items}
                    images={testimonials.images}
                />
            </StructurePage>
        </>
    )
}

export default Page
