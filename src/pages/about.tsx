import Head from 'next/head'
import type { NextPage } from 'next'
import StructurePage from '../structure'
import React, { useContext } from 'react'
import Hero2 from '../sections/hero/hero2'
import Tags1 from '../sections/tags/tags1'
import Skils1 from '../sections/skils/skils1'
import { quemSomosData } from '../../content/quemSomosData'
import { GeneralContext } from '../context/general'
import Divider1 from '../components/dividers/divider1'
import Testimonial2 from '../sections/testimonials/testimonial2'

const Page: NextPage = () => {
    const { menuStyleProvider } = useContext(GeneralContext)
    menuStyleProvider.setMenuStyle(1)

    const {
        seo,
        hero,
        tags,
        advantage,
        testimonials
    } = quemSomosData

  return (
    <>
        <Head>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
        </Head>

        <StructurePage>
            <Hero2
                name={hero.name}
                position={hero.position}
                block1={hero.block1}
                block2={hero.block2}
                image={hero.image}
            />

            <Tags1
                title={tags.title}
                tags={tags.listTags}
            />

            <Divider1 />

            <Skils1
                title={advantage.title}
                advantages={advantage.advantages}
            />

            <Divider1 />

            <Testimonial2
                title={testimonials.title}
                slides={testimonials.items}
                images={testimonials.images}
            />
        </StructurePage>
    </>
  )
}

export default Page
