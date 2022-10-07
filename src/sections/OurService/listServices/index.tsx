import React from 'react'
import { Ul } from './styles'

interface service {
    img: string
    title: string
    message: string
}

interface props {
    services: service[]
}

const ListServices: React.FC<props> = ({ services, ...props }) => (
    <Ul {...props}>
        {services.map((el, index) => {
            return (
                <li key={index}>
                    <div className="wrap-img icon-svg">
                        <img src={el.img} alt="" />
                    </div>
                    <h3>{el.title}</h3>
                    <p className="text-gray-500">{el.message}</p>
                </li>
            )
        })}
    </Ul>
)

export default ListServices
