import { FC } from 'react'
import './AboutUs.scss'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import OrderService from '../../components/orderService/OrderService'

const AboutUs: FC = () => {
    const title = "ЗАДАТЬ ВОПРОС"
    const info = "Оформите заявку на сайте. Наш менеджер свяжется с вами для уточнения деталей. "
    return (
        <>
            <Breadcrumb title="О компании" />
            <main className='aboutUs'>
                <h2>О нашей компании</h2>
                <p>
                    Компания - работает в сфере строительства. Наши клиенты имеют доступ к большой базе
                    строительных услуг. Наша ответственность и человеческое отношение к каждому клиенту. Отдел продаж
                    работает круглосуточно и без выходных, поэтому заказчик всегда может задать любые интересующие его
                    вопросы.
                </p>
                <p>
                    Мы предлагаем широкий выбор строительных услуг: строительство каркасных домов, строительство
                    из газобетона, строительство из керамических блоков, дома из кирпича, оказываем услуги по строительству
                    мансарды, текущие и капитальные ремонты домов, такие как ремонт подъездов,ремонт фасадов, ремонт кровли,
                    строительство быстровозводимых ангаров, строительство складов, строительство зернохранилищ,
                    строительство коровников, строительство быстровозводимых коммерческих объектов и многое другое.
                </p>
                <p>
                    Широкая география нашего присутствия и грамотная система подхода к работе позволяют получить строительные
                    услуги нашим клиентам из многих регионов России.
                </p>
                <p>
                    Своими главными приоритетами мы считаем высокий класс обслуживания и максимально выгодное решение задач
                    любой сложности. Мы берем на себя все заботы клиента: начиная с проектирования и расчета, доставкой
                    строительных материалов, заканчивая строительством либо ремонтом объектов. Таким образом, обращаясь к
                    нам, каждый заказчик получает возможность реальной экономии бюджета. Компания гарантирует
                    благоприятные цены на все виды строительных услуг. На все виды работ предоставляется гарантия.
                </p>
                <OrderService title={title} info={info}/>
            </main>
        </>
    )
}

export default AboutUs