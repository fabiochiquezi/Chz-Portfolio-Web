import Head from 'next/head'
import type { NextPage } from 'next'
import { BoxSalles } from './boxSalles'
import React, { useContext } from 'react'
import { TimeLine } from '../../home/timeLine'
import StructurePage from '../../share/structure'
import { GeneralContext } from '../../share/context/general'
import { structureData } from '../../../general/content/structureData'
import { productSiteData } from '../../../general/content/productSiteData'

const Page: NextPage = () => {
    const { menuStyleProvider } = useContext(GeneralContext)
    menuStyleProvider.setMenuStyle(1)

    const { seo, timeLine, prices } = productSiteData

    const { general } = structureData

    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Head>

            <StructurePage>
                <TimeLine
                    title={timeLine.title}
                    endMessage={timeLine.endMessage}
                    times={timeLine.times}
                    className="py-16 lg:pt-20"
                    mode="dark"
                />

                <BoxSalles
                    title={prices.title}
                    subtitle={prices.subtitle}
                    textButton={prices.button}
                    cellphone={general.celphone}
                    price={prices.preco}
                    points={prices.points}
                    className="pt-16 pb-16 md:pt-20 md:pb-20 xl:pt-24 xl:pb-24"
                />
            </StructurePage>
        </>
    )
}

export default Page
