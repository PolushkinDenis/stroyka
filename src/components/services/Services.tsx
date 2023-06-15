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
                            <OrderService title="Задать вопрос"/>
                    </div>
                </div>
                <div className='services__container'>
                    {children}
                </div>
                <hr className='order-hr-top' />
                <OrderService title="Заказать услугу" info="Оформите заявку на сайте. Наш менеджер свяжется с вами для уточнения деталей."/>
                <hr className='order-hr-botton' />
            </main>
        </>
    )
}

export default Services