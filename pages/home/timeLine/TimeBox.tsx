import React from 'react'
type props = {
    className?: string,
    style?: number,
    color?: string,
    image: string,
    title: string,
    msg: string,
    mode: string
}

const box = ' flex flex-col text-center max-w-xs md:flex-row md:max-w-none md:items-center z-10 md:gap-8 lg:gap-12'

const TimeBox: React.FC<props> = ({ image, color, title, msg, className, style = 1, mode, ...props }) => {
    return (
        <div className={className + (style === 1 ? ' md:text-left ' : ' md:text-right ') + box} {...props}>

            <div className={'md:w-1/2 lg:w-3/5 ' + (style === 1 ? 'md:order-3' : 'md:order-1')}>
                <h3 className={'text-' + color + ' font-bold mb-2 text-2xl lg:text-3xl'}>{title}</h3>
                <p className={
                    'text-md mb-10 md:mb-0 lg:text-lg xl:w-9/12 2xl:w-8/12 ' +
                    (style === 1 ? ' xl:mr-auto' : ' xl:ml-auto') +
                    (mode === 'dark' ? ' text-white' : ' text-gray-500')
                }
                >{msg}</p>
            </div>

            <div className={
                'w-8 hidden md:flex flex-col items-center order-2 pt-3 pb-7' +
                (mode === 'dark' ? ' bg-neutral1' : ' bg-white')}
            >
                <div className={'bg-' + color + ' w-4 h-4 rounded-full absolute left-1/2 -ml-2'}></div>
            </div>

            <div className={'md:w-1/2 lg:w-3/5 ' + (style === 1 ? 'md:order-1' : 'md:order-3')}>
                <img src={image} alt={title} className={'xl:w-9/12 2xl:w-8/12 ' + (style === 1 ? 'ml-auto' : 'mr-auto')} />
            </div>
        </div>
    )
}

export default TimeBox
