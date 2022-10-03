import Head from 'next/head'
import type { NextPage } from 'next'
import React, { useContext } from 'react'
import StructurePage from '../structure'
import { duvidasGeraisData } from '../../content/duvidasGeraisData'
import Title2 from '../components/titles/title2'
import { GeneralContext } from '../context/general'
import Divider2 from '../components/dividers/divider2'

const groupAsk = 'lg:flex flex-wrap py-20'
const block = 'lg:flex lg:gap-4 lg:w-2/3 pt-2'
const answer = 'text-md lg:w-3/6 leading-7 text-white'
const ask = 'font-bold text-lg xl:text-xl lg:w-3/6 mb-2 text-color5'
const h3 = 'font-bold text-3xl lg:text-4xl mb-6 lg:w-1/3 text-color6'

const Page: NextPage = () => {
    const { menuStyleProvider } = useContext(GeneralContext)
    menuStyleProvider.setMenuStyle(1)
    const { seo, groupQuests, title, subtitle } = duvidasGeraisData

    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Head>

            <StructurePage>
                <section className="pt-20 pb-8 bg-neutral1">
                    <div className="container">

                        <div data-aos="fade">
                            <Title2 title={title} className="text-blue-500" />
                            <p className="text-white mt-4 lg:mt-6 lg:text-lg max-w-lg">{subtitle}</p>
                        </div>

                        {groupQuests.map((el, index) => (
                            <>
                                <div key={index} data-aos="fade" data-aos-delay="100" className={groupAsk}>
                                    <h3 className={h3}>{el.title}</h3>

                                    {el.quests.map((k, index) => {
                                        const questsLength = el.quests.length
                                        const last = questsLength === (index + 1)

                                        return (
                                            <>
                                                <div key={index} className={block + (!last ? ' mb-12' : '')}>
                                                    <p className={ask}>{k.ask}</p>
                                                    <p className={answer}>{k.answer}</p>
                                                </div>

                                                {!last && <div className="lg:w-1/3"></div>}
                                            </>
                                        )
                                    })}
                                </div>

                                <Divider2 />
                            </>
                        ))}

                        {/* <p className="text-xl mt-20 mb-20 text-white" data-aos="fade">Don’t find your question? Contact us now, we alway willing to help you.</p>
                        <Divider2 /> */}
                    </div>

                </section>
            </StructurePage>
        </>
    )
}

export default Page
