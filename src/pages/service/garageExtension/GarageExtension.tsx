import React, { FC } from "react";
import Services from "../../../components/services/Services";
import garage_extension from '../../../images/service/garage_extension.jpg'

const GarageExtension: FC = () => {

    const info = <p>Сложно представить современный частный загородный дом без гаража для транспортного средства.
        Это связано с тем фактором, что большинство граждан добираются к своему дому или коттеджу за городом,
        используя личное транспортное средство. Поэтому все чаще к представителям нашей
        компании в Самаре обращаются клиенты и заказчики с целью осуществления пристройки гаража к частному дому.</p>

    return (
        <Services image={garage_extension} title="Пристройка гаража" info={info}>
            {
                <div>
                    <p>
                        Мы предлагаем строительство как уже готовых проектов, так и создаем индивидуальные чертежи,
                        учитывая пожелания клиентов. Мы – одна из немногих компаний на Российском рынке, кто предлагает
                        своим клиентам проектирование и строительство в ипотеку на выгодных условиях. Для того чтобы
                        заказать пристройку гараж от представителей нашей компании, достаточно связаться с менеджером
                        или посетить официальный сайт компании.
                    </p>
                    <h2>Преимущества</h2>
                    <p>
                        Гараж пристроенный к дому имеет несколько преимуществ в отношении строительства и эксплуатации:
                    </p>
                    <ul>
                        <li>экономия денежных средств на строительстве в связи с тем, что часть будущей конструкции является
                            уже возведенной. Гараж является примыкающей конструкцией, поэтому удается сэкономить время на
                            строительстве одной из его несущих стен. В связи с тем, что гараж примыкает к дому, также удается
                            снизить затраты на проведение инженерных коммуникаций к сооружению;</li>
                        <li>сохраняется значительное количество свободного пространства на участке. Поэтому пристройка
                            гаража является уместной, как на больших территориях дачных участках, так и на незначительных.</li>
                        <li>высокий уровень комфорта, обусловленный тем, что из гаражной конструкции каждый владелец может
                            сразу же попасть непосредственно в дом.</li>
                        <li>высокий уровень заботы о транспортном средстве и экономия времени, обусловленная тем, что
                            автомобиль стоит в теплом помещении, поэтому даже в зимний период времени не требует длительного прогрева.</li>
                    </ul>
                    <p>
                        На современном этапе жизни к представителям нашей компании нередко обращаются заказчики с целью возведения гаража
                        или пристройки гаражного типа к дому на несколько транспортных средств.
                    </p>
                    <h2>Рекомендации</h2>
                    <p>
                        Существует ряд рекомендаций, которые специалисты нашей компании просят выполнить клиента при осуществлении
                        заказа, как готовых, так и индивидуальных проектов пристроек в виде гаража:
                    </p>
                    <ul>
                        <li>расположение слева или справа от жилой конструкции в более чем двух метрах от окон;</li>
                        <li>сохранение глубины залегания фундамента;</li>
                        <li>рекомендуется осуществлять строительство гаражной пристройки совместно с возведением жилого дома,
                            что позволит избежать различных негативных ситуаций и деформаций фундамента или стен;</li>
                        <li>обязательное подключение пожарной сигнализации внутри сооружения, чтобы обеспечить безопасность всех жильцов дома.</li>
                    </ul>
                    <p>
                        Различные нюансы, связанные с гаражной пристройкой, помогут выяснить квалифицированные инженеры и
                        проектировщики, которые обладают многолетним опытом. Они без труда подскажут заказчику, какой
                        именно вид пристройки станет оптимальным именно для его дома. Выбор материалов строительства,
                        конечно же, зависит от желания клиента, но рекомендуется прислушаться к опыту квалифицированных
                        инженеров.
                    </p>
                </div>
            }
        </Services>

    )
}

export default GarageExtension