import { FC, useEffect, useState } from 'react'
import './Breadcrumb.scss'
import { NavLink, useLocation } from 'react-router-dom'

interface IBreadcrumbs {
    name: string,
    value: string
}

interface BreadcrumbProps {
    title: string
}

const Breadcrumb: FC<BreadcrumbProps> = ({ title }) => {
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbs[]>([])
    const location = useLocation()

    const linkUrl: IBreadcrumbs[] = [
        { name: "Главная", value: "stroyka" },
        { name: "Проектирование", value: "designing" },
        { name: "Контакты", value: "contacts" },
        { name: "Автомойки", value: "carwash" },
        { name: "Веранды", value: "veranda" },
        { name: "Гаражы", value: "garage" },
        { name: "Крыши", value: "roof" },
        { name: "Мансарды", value: "mansardy" },
        { name: "Сооружения", value: "sooruzhenie" },
        { name: "Фасад", value: "fasad" },
        { name: "Фундамент", value: "fundament" },
        {name: "Пристройка к дому", value: "extension-to-the-house"},
        {name: "Пристройка гаража", value: "garage_extension"},
        {name: "Услуги", value: "services"},
        {name: "Ленточный фундамент", value: "foundation"},
        {name: "О компании", value: "about"},
        {name: "Ремонт", value: "repair"},
        {name: "Ремонт балконов", value: "remont_balcony"},
        {name: "Ремонт зданий", value: "remont_zdaniy"},
        {name: "Ремонт частного дома", value: "remont_home"},
        {name: "Ремонт кровли", value: "remont_krovel"},
        {name: "Ремонт фасада", value: "remont_fasada"},
    ]

    const createBreadcrumbs = () => {
        const curruntUrl = location.pathname
        const pathArray = curruntUrl.split("/").filter(path => path !== "")

        const newBreadcrumbs: IBreadcrumbs[] = []
        const links: string[] = []

        pathArray.map((curPath, index) => {
            const breadcrumb = linkUrl.filter((link) => link.value === curPath)[0]
            if (breadcrumb !== undefined) {
                if (links.length === 0) {
                    const breadcrumbObj: IBreadcrumbs = {
                        name: breadcrumb.name,
                        value: "/" + breadcrumb.value
                    }
                    newBreadcrumbs.push(breadcrumbObj)
                    links.push("/" + breadcrumb.value)                   
                }
                else {                  
                    const breadcrumbObj: IBreadcrumbs = {
                        name: breadcrumb.name,
                        value: links[index-1] + "/" + breadcrumb.value
                    }
                    newBreadcrumbs.push(breadcrumbObj)
                    links.push("/" + breadcrumb.value)
                }
            }
        })
        setBreadcrumbs(newBreadcrumbs)
    }

    useEffect(() => {
        createBreadcrumbs()
    }, [])

    return (
        <section className='breadcrumbs'>
            <div className='breadcrumbs__content'>
                <div className='breadcrumbs__content-links'>
                {breadcrumbs.map((breadcrumb, index) => (
                    <div className='breadcrumbs-links' key={breadcrumb.value}>
                        {index === breadcrumbs.length -1 ? (
                            <span>{breadcrumb.name}</span>
                        ) : (
                            <NavLink to={`${breadcrumb.value}`}>{breadcrumb.name}<span className='breadcrumbs-space'>-</span></NavLink>
                        )}                
                    </div>
                ))}
                </div>
                <h1>{title}</h1>
            </div>
            


        </section>
    )
}

export default Breadcrumb