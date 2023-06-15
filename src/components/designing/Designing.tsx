import React, { FC } from 'react'
import './Designing.scss'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import OrderService from '../orderService/OrderService'

interface DesigningProps {
    title: string,
    image: string,
    children: React.ReactNode
}

const Designing: FC<DesigningProps> = ({ image, title, children }) => {
    return (
        <>
            <Breadcrumb title={title} />
            <main className='designing'>
                <div className='designing__container-img'>
                    <img className='designing__img' src={image} />
                </div>
                <div className='designing__container'>
                    {children}
                </div>
                <hr className='order-hr-top' />
                <OrderService title="Заказать услугу" info="Оформите заявку на сайте. Наш менеджер свяжется с вами для уточнения деталей."/>
                <hr className='order-hr-botton' />
            </main>
        </>
    )
}

export default Designing