import React, { FC } from 'react'
import './CarWash.scss'
import avtomoyka from '../../../images/disign/avtomoyka.jpg'
import Designing from '../../../components/designing/Designing'

const CarWash: FC = () => {
    return (
        <Designing image={avtomoyka} title="Проектирование автомойки">
            {
                <div>
                    <b>Разделы проектирования:</b>
                    <ul>
                        <li>АР (Архитектурный раздел)</li>
                        <li>КР (Конструктивное решение = КМ + КМД)</li>
                        <li>КЖ (Конструкции железобетонные)</li>
                        <li>ПЗ (Пояснительная записка)</li>
                        <li>ПОС (Проект организации строительства)</li>
                    </ul>
                    <h2>Проектирование автомойки</h2>
                    <p>
                        Удобная, современная автомойка – привлекательна для клиентов и прибыльна для ее владельца.
                        Структура объекта, предоставляющего услуги по мойке автотранспорта, включает непосредственно
                        боксы с установленным моечным оборудованием, места для стоянки, кафе для водителей, санузла.
                        Грамотное проектирование автомойки позволяет еще до начала ее строительства предусмотреть
                        все важные детали, и, при необходимости, внести конструктивные коррективы. Если вы планируете
                        открыть автомойку или расширить имеющийся автомобильный бизнес еще одним новым объектом,
                        специалисты строительной нашей компании оперативно и профессионально выполнят проекты
                        строительства автомоек: и обычных, и самообслуживания. От грамотно составленной чертежной
                        документации зависит безопасность, эффективность и доходность будущего объекта. У нас вы
                        получите не только набор чертежей, но и полный комплект разрешительной документации на
                        строительство.
                    </p>
                    <h2>Особенности проектирования разных видов автомоек</h2>
                    <p>
                        Проектирование быстровозводимых автомоек – это план по строительству современных решений с
                        минимальными финансовыми вложениями и высокой окупаемостью. В наличии имеются типовые проекты,
                        полностью готовые к реализации. Но также наша команда разрабатывает и строго индивидуальные
                        решения. Перед началом работы мы получаем от заказчика техническое задание, учитываем его
                        индивидуальные требования, четко укладываемся в выделенный бюджет и согласованные сроки.
                    </p>
                    <p>
                        Проектирование автомойки самообслуживания или обычного формата предполагает работу над чертежами,
                        где отражены ключевые аспекты деятельности объекта:
                    </p>
                    <ul>
                        <li>предполагаемая расстановка оснащения: оборудование размещается в эргономичном порядке,
                            чтобы обеспечить высокую эффективность каждой технологической операции;</li>
                        <li>в рамках составления проекта автомобильной мойки предусматривается монтаж инженерных коммуникаций:
                            водоснабжения, электричества, отопления, канализации, вентиляции, кондиционирования воздуха;</li>
                        <li>для проектирования автомоек нормы экологии также учитываются: в плане обязательно указываются
                            места подключения очистных сооружений для очищения использованной воды с моющими средствами.</li>
                    </ul>
                    <p>
                        Команда специалистов строительной нашей компании занимается проектирования автомоек различной площади, 
                        конфигураций и формата: самообслуживания, для легкового транспорта, для грузовых автомобилей, автобусов – 
                        на необходимое количество постов. Готовый проект включает в себя пояснительную записку, где подробно 
                        отражаются технические характеристики автомойки в целом, указывается перечень оборудования, другие нюансы.
                         Узнать ориентировочную стоимость проектирования автомойки можно, нажав кнопку «заказать расчет» или 
                         позвонив нам по телефонам. Начните свой бизнес в сфере обслуживания авто с грамотно составленного проекта 
                         – мы вам в этом поможем!
                    </p>
                </div>
            }
        </Designing>
    )
}

export default CarWash