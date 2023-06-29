import {FC, useEffect} from 'react'
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb'
import Menu from '../../../components/menu/Menu'
import { IMenu } from '../../../types/IMenu'
import ServiceItem from '../../../components/serviceItem/ServiceItem'
import { IServiceItem } from '../../../types/IServiceItem'
import balcony from '../../../images/repair/balcony.jpeg'
import remont_zdaniy from '../../../images/repair/repair_house.jpg'
import repair_home from '../../../images/repair/repair_home.jpg'
import repair_krivli from '../../../images/repair/repair_krovli.jpg'
import repair_fasada from '../../../images/repair/repair_fasada.jpeg'

const RepairPage: FC = () => {

    const servicesList: IServiceItem[] = [
        {
            description: "Балкон – это неотъемлемая часть любого многоэтажного или частного дома. Зачастую именно здесь располагается зона отдыха и складирования важных предметов.",
            href: "remont_balcony",
            image: balcony,
            title: "Ремонт балконных плит"
        },
        {
            description: "Профессиональный ремонт зданий и сооружений – одно из приоритетных направлений деятельности строительной компании «Кирстрой». Услуги предоставляются как в рамках полного комплекса ремонтно-восстановительных мероприятий, включая внутренние и фасадные работы, так и по отдельным направлениям, например, только замена водопровода, остекление, утепление фасада.",
            href: "remont_zdaniy",
            image: remont_zdaniy,
            title: "Ремонт зданий"
        },
        {
            description: "Ремонт частных домов в Самаре – приоритетное направление деятельности компании.",
            href: "remont_home",
            image: repair_home,
            title: "Ремонт частного дома"
        },
        {
            description: "На строительном рынке существуют мягкие и жесткие типы кровли. К кровельным материалам мягкого типа относятся рулонные изделия, битумная черепица и схожие по консистенции изделия.",
            href: "remont_krovel",
            image: repair_krivli,
            title: "Ремонт кровли"
        },
        {
            description: "Ремонтные мероприятия позволяют устранить видимые повреждения и восстановить целостность облицовки фасада, а также обновить его.",
            href: "remont_fasada",
            image: repair_fasada,
            title: "Ремонт фасада"
        },
    ]

    const servicesMenu: IMenu[] = [
        { title: "Ремонт балконных плит", href: "remont_balcony" },
        { title: "Ремонт зданий", href: "remont_zdaniy" },
        { title: "Ремонт частного дома", href: "remont_home" },
        { title: "Ремонт кровли", href: "remont_krovel" },
        { title: "Ремонт фасада", href: "remont_fasada" },
    ]

    useEffect(() => {
        window.scrollTo(0, 100)
    }, [])

    return (
        <>
        <Breadcrumb title="Ремонт в Самаре и области" />
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

export default RepairPage