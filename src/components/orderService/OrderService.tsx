import React, { FC } from 'react'
import './OrderService.scss'

const OrderService: FC = () => {
    return (
        <>
            <hr className='order-hr-top'/>
            <section className='order__content'>
                <button className='order__content-btn' >Заказать услугу</button>
                <span className='order__content-text'>Оформите заявку на сайте. Наш менеджер свяжется с вами для уточнения деталей. </span>
            </section>
            <hr className='order-hr-botton'/>
        </>


    )
}

export default OrderService