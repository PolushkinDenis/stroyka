import React, { FC } from 'react'
import './ServiceItem.scss'
import { NavLink } from 'react-router-dom'
import { IServiceItem } from '../../types/IServiceItem'

interface IServiceItemProps {
    service: IServiceItem
}

const ServiceItem: FC<IServiceItemProps> = ({service}) => {
    return (
        <div className='serviceItem'>
            <img src={service.image}/>
            <div className="serviceItem__contetnt">
                <NavLink className="serviceItem__contetnt-link" to={service.href}>{service.title}</NavLink>
                <div className='serviceItem__contetnt_description'>{service.description}</div>
                <NavLink className="serviceItem__contetnt-btn" to={service.href}>Подробнее</NavLink>
            </div>
        </div>
    )
}

export default ServiceItem