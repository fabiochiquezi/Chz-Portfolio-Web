import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import type { NextPage } from 'next'
import StructurePage from '../structure'

const Page: NextPage = () => {
  return (
    <>
        <Head>
            <title>Theme 1 | Moonex</title>
            <meta name="description" content="descriptio" />
        </Head>

        <StructurePage>
            <div className="container py-16 lg:py-32 flex flex-col md:flex-row justify-between">
                <div className="content order-2">
                    <h1 className="text-4xl font-bold mb-5 lg:mb-8 lg:text-5xl xl:text-7xl">
                        Opps...! <br />
                        Página não encontrada
                    </h1>
                    <p className="text-lg xl:text-2xl mb-8 lg:mb-16 xl:mb-24">
                        Sentimos muito pelo seu desconforto. Entre em contato conosco caso maiores problemas.
                    </p>
                    <Link href="/">
                        <a className="text-lg font-bold">
                            Voltar para a página inicial
                        </a>
                    </Link>
                </div>
                <div className="wrap-img mb-16 md:mb-0 flex justify-center order-1 md:order-2">
                    <img src="./general/notFound.png" className="sm:w-1/2 md:w-2/3 xl:w-auto" alt="" />
                </div>
            </div>
        </StructurePage>
    </>
  )
}

export default Page
