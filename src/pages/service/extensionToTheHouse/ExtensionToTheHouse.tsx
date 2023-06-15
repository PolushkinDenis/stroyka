import React, { FC } from 'react'
import extensionToTheHouse_img from '../../../images/service/extensionToTheHouse.jpg'
import Services from '../../../components/services/Services'

const ExtensionToTheHouse: FC = () => {

    const info = <p>Компания на протяжении многих лет занимается строительством, возведением и проектированием различных
        конструкций. Благодаря многолетнему опыту, специалисты строят, разрабатывают проекты индивидуального типа в отношении
        сооружений. В том числе – и пристрой к дому. Мы – одна из немногих организаций на современном рынке, которая предлагает
        приобрести в ипотеку дом или пристройку, как готового, так и индивидуального проекта.</p>

    return (
        <Services image={extensionToTheHouse_img} title="Пристройка к дому" info={info}>
            {
                <div>
                    <h2>Где возводят пристройку</h2>
                    <p>
                        К нам обращаются владельцы частных загородных сооружений с целью возведения полезной площади
                        или увеличения площади дома путем строительства пристройки различной конструкции. Существует множество нюансов, связанных
                        со строительством пристройки к дому. Опытные профессионалы нашей компании рекомендуют изначально правильно выбрать фундамент
                        для будущей конструкции. Оптимально выбрать один из двух основных видов фундамента:
                    </p>
                    <ul>
                        <li>жесткая сцепка;</li>
                        <li>деформационный шов.</li>
                    </ul>
                    <p>Выбор основы под пристройку зависит от множественных характеристик уже готовой конструкции, особенностей почвы, и
                        предполагаемой нагрузки на фундамент.</p>
                    <h2>Материалы для строительства</h2>
                    <p>
                        На современном рынке строительных материалов представлен широкий ассортимент изделий, из которых можно возвести пристройку для
                        дома любого типа в зависимости от ценовой категории, характеристик и других нюансов. Инженеры компании выделяют
                        следующие строительные материалы:
                    </p>
                    <ul>
                        <li>пенобетон;</li>
                        <li>газобетон;</li>
                        <li>каркасные конструкции;</li>
                        <li>крупноформатный кладочный материал.</li>
                    </ul>
                    <p>В связи с ценовой политикой и скоростью возведения пристройки, большинство клиентов и заказчиков компании отдают
                        предпочтение каркасной конструкции. Она отличается не только высокой энергоэффективностью, но также значительными
                        положительными характеристиками в ходе эксплуатации. Наиболее дорогостоящими по цене являются каменные
                        сооружения, но они занимают длительный период времени в отношении строительства.</p>
                    <h2>Функциональность</h2>
                    <p>
                        Пристройка по функциональности может иметь любое направление, однако в большинстве случаев она выступает:
                    </p>
                    <ul>
                        <li>дополнительной ванной комнатой;</li>
                        <li>жилым помещением;</li>
                        <li>помещением для котельной;</li>
                        <li>личным кабинетом.</li>
                    </ul>
                    <p>
                        Обратившись к представителям нашей на всей территории Российской Федерации, можно создать индивидуальный проект,
                        согласно которому функциональность пристройки может иметь любое направление. Мы предлагаем обширный перечень услуг по
                        умеренной ценовой категории, что позволяет клиентам не только возводить дома, но и расширять площадь жилых сооружений
                        при возникновении такой необходимости.
                        Опытные инженеры помогут не только создать, но также выбрать уже готовый проект и адаптировать его под желания заказчика.
                    </p>
                </div>
            }
        </Services>

    )
}

export default ExtensionToTheHouse