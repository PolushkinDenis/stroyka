import {FC} from 'react'
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb'
import Menu from '../../../components/menu/Menu'
import car_wash from '../../../images/disign/avtomoyka.jpg'
import garage from '../../../images/disign/garage.jpg'
import varanda from '../../../images/disign/veranda.jpg'
import roof from '../../../images/disign/roof.jpg'
import mansardy from '../../../images/disign/mansardy.jpeg'
import sooruzhenie from '../../../images/disign/sooruzhenie.jpg'
import fasad from '../../../images/disign/fasad.jpg'
import fundament from '../../../images/disign/fundament.jpg'
import { IServiceItem } from '../../../types/IServiceItem'
import { IMenu } from '../../../types/IMenu'
import ServiceItem from '../../../components/serviceItem/ServiceItem'

const servicesList: IServiceItem[] = [
    {
        description: "Удобная, современная автомойка – привлекательна для клиентов и прибыльна для ее владельца. Структура объекта, предоставляющего услуги по мойке автотранспорта, включает непосредственно боксы с установленным моечным оборудованием, места для стоянки, кафе для водителей, санузла.",
        href: "carwash",
        image: car_wash,
        title: "Автомойки"
    },
    {
        description: "Проектирование веранды – его результаты заказчики всегда ждут с особенным нетерпением, так как наличие красивой и удобной пристройки делает жизнь загородом еще более комфортной.",
        href: "veranda",
        image: varanda,
        title: "Веранды"
    },
    {
        description: "Наша строительная компания занимается разработкой индивидуальных проектов гаража в Самаре и предлагает воронежским автомобилистам оптимальные по стоимости и техническому оснащению решения. Мы разрабатываем проектную документацию для возведения гаража каркасного типа, с мансардой, на 2 машины, из газобетона и других материалов.",
        href: "garage",
        image: garage,
        title: "Гаражы"
    },
    {
        description: "Проектирование крыши – это один из ключевых, важных этапов на пути к подготовке возведения любого строительного объекта: от частного дома или загородного коттеджа до торгового центра, или склада.",
        href: "roof",
        image: roof,
        title: "Крыши"
    },
    {
        description: "Многопрофильная компания «Кирстрой» выполняет проектирование домов с мансардой в Самаре. Составление проектных решений осуществляется как «с нуля», когда дом еще не построен, так и уже для возведенных объектов.",
        href: "mansardy",
        image: mansardy,
        title: "Мансарды"
    },
    {
        description: "Проектирование сооружений – это процесс разработки инженерно-конструкторской документации, которая в дальнейшем будет использована как проектная база для проведения строительных работ.",
        href: "sooruzhenie",
        image: sooruzhenie,
        title: "Сооружений"
    },
    {
        description: "Проект фасада – это наглядный эскиз, точные расчеты и чертежная документация, на базе которых будет возводиться и обустраиваться экстерьер объекта. Архитектурный стиль, функциональность и безопасность этого элемента постройки отражается в проектной документации.",
        href: "fasad",
        image: fasad,
        title: "Фасада"
    },
    {
        description: "Проектирование фундамента – один из важнейших этапов успешной разработки проекта для всего строительного объекта и его безопасной эксплуатации в дальнейшем. Фундамент представляет собой базу, основу любого здания: будь-то многоквартирный или частный дом, торговый центр, складкой комплекс либо производственный объект.",
        href: "fundament",
        image: fundament,
        title: "Фундамент"
    },
]


const servicesMenu: IMenu[] = [
    { title: "Проектирование автомойки", href: "carwash" },
    { title: "Проектирование веранды", href: "veranda" },
    { title: "Проектирование гаража", href: "garage" },
    { title: "Проектирование крыши", href: "roof" },
    { title: "Проектирование мансарды", href: "mansardy" },
    { title: "Проектирование сооружений", href: "sooruzhenie" },
    { title: "Проектирование фасада", href: "fasad" },
]

const DisignPage: FC = () => {
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

export default DisignPage