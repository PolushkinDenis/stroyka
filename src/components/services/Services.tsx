import React, { FC } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import './Services.scss'
import OrderService from '../orderService/OrderService'

interface ServicesProps {
    title: string,
    image: string,
    children: React.ReactNode,
    info: React.ReactNode
}

const Services: FC<ServicesProps> = ({ children, image, title, info }) => {

    return (
        <>
            <Breadcrumb title={title} />
            <main className='services'>
                <div className='services__container-img'>
                    <img className='services__img' src={image} />
                    <div className='services__container-box'>
                        {info}
                        <div className='services__question'>
                            <button>Задать вопрос</button>
                        </div>
                    </div>
                </div>
                <div className='services__container'>
                    {children}
                </div>
                <OrderService />
            </main>

        </>
    )
}

export default Services