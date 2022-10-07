import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    &:hover{
        img{
            filter: grayscale(0);
        }
    }

    img{
        transition: all .3s ease;
        filter: grayscale(100%);
    }
`

type props = {
    image: string,
    title: string,
    className?: string
    percentage: string
}

const Box2: React.FC<props> = ({ image, title, className, percentage, ...props }) => (
    <Div {...props} className={className + ' ' + 'flex flex-col items-center'}>
        <div className="bg-gray-200 flex flex-col items-center justify-center w-32 xl:w-40 pt-12 pb-10 rounded-full h-72">
            <div className="wrap-img w-full flex flex-col items-center h-44 items-center justify-center mb-0 p-6">
                <img src={image} alt="" className="w-full" />
            </div>
            <p className="text-2xl">{percentage}</p>
        </div>

        <h5 className="text-xl mt-4">{title}</h5>
    </Div>
)

export default Box2
