import React from 'react'

const section = 'py-16 md:py-20 lg:py-24'
const h4 = 'text-lg font-bold mb-2 lg:mb-4 2xl:mb-3 text-gray-400'
const li =
    'text-2xl md:text-5xl xl:text-7xl text-blue-500 mr-1 lg:mr-2 xl:mr-4 duration-200'

type props = {
    className?: string
    title: string
    tags: { title: string; link: string }[]
}

const Tags: React.FC<props> = ({ title, tags, className }) => (
    <section className={className ?? section}>
        <div className="container">
            <h4 className={h4}>{title}</h4>

            <ul data-aos="fade" className="flex flex-wrap">
                {tags.map((el, index) => (
                    <>
                        <li
                            key={index}
                            className={
                                'text-2xl md:text-5xl xl:text-7xl text-purple-600 mr-1 lg:mr-2 xl:mr-4 duration-200'
                            }
                        >
                            {el.title}
                        </li>
                        {tags.length !== index + 1 && (
                            <li
                                className={
                                    'text-2xl md:text-5xl xl:text-7xl text-gray-300 mr-1 lg:mr-2 xl:mr-4 duration-200'
                                }
                            >
                                {' '}
                                /{' '}
                            </li>
                        )}
                    </>
                ))}
            </ul>
        </div>
    </section>
)

export { Tags }
