import { FC } from 'react'
import './ServicesPage.scss'
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb'
import extensionToTheHouse from '../../../images/service/extensionToTheHouse.jpg'
import garage_extension from '../../../images/service/garage_extension.jpg'
import ServiceItem from '../../../components/serviceItem/ServiceItem'
import { IServiceItem } from '../../../types/IServiceItem'
import Menu from '../../../components/menu/Menu'
import { IMenu } from '../../../types/IMenu'
import foundation from '../../../images/service/foundation.jpg'

const servicesList: IServiceItem[] = [
    {
        description: "Наша компания на протяжении многих лет занимается строительством, возведением и проектированием различных конструкций. Благодаря многолетнему опыту, специалисты строят, разрабатывают проекты индивидуального типа в отношении сооружений",
        href: "extension-to-the-house",
        image: extensionToTheHouse,
        title: "Пристройка к дому"
    },
    {
        description: "Сложно представить современный частный загородный дом без гаража для транспортного средства. Это связано с тем фактором, что большинство граждан добираются к своему дому или коттеджу за городом, используя личное транспортное средство. Поэтому все чаще к представителям компании «Кирстрой» в Самаре обращаются клиенты и заказчики с целью осуществления пристройки гаража к частному дому.",
        href: "garage_extension",
        image: garage_extension,
        title: "Пристройка гаража"
    },
    {
        description: "Наша компания в Самаре осуществляет строительство ленточного фундамента различного типа. Данный фундамент является одним из самых распространенных, поскольку отличается впечатляющими характеристиками. Представители компании выделяют его прочность и значительную несущую способность.",
        href: "foundation",
        image: foundation,
        title: "Возведение фундамента"
    }
]


const servicesMenu: IMenu[] = [
    { title: "Пристройка к дому", href: "extension-to-the-house" },
    { title: "Пристройка гаража", href: "garage_extension" },
    { title: "Возведение фундамента", href: "foundation" },
]

const ServicesPage: FC = () => {
    return (
        <>
            <Breadcrumb title="Услуги в Самаре и области" />
            <main className='servicesPage'>
                <Menu list={servicesMenu} />
                <section>
                    {servicesList.map(service => (
                        <>
                            <ServiceItem service={service} />
                            <hr />
                        </>
                    ))}
                    <div>
                        <h2>Прайс компании</h2>
                        <div className='services__contacts'>
                            <span>Для уточнения стоимости работ обратитесь по телефону: </span>
                            <a className='services__contacts-phone' href="tel:+79879876136">+7 (987) 987-61-36</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ServicesPage