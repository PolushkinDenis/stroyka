import { FC } from 'react'
import zdanie from '../../../images/repair/repair_house.jpg'
import Services from '../../../components/services/Services'

const RepairZdaniy: FC = () => {
    const info = <p>Профессиональный ремонт зданий и сооружений – одно из приоритетных направлений деятельности
        строительной компании «Кирстрой». Услуги предоставляются как в рамках полного комплекса ремонтно-восстановительных
        мероприятий, включая внутренние и фасадные работы, так и по отдельным направлениям, например, только замена
        водопровода, остекление, утепление фасада. Мы выполняем организацию ремонта зданий и сооружений «под ключ» с
        гарантией эталонного качества выполненных задач.</p>

    return (
        <Services image={zdanie} title="Ремонт зданий" info={info}>
            {
                <div>
                    <p>Комплексный ремонт зданий необходим для конструктивного решения следующих задач:</p>
                    <ul>
                        <li>когда объект пришел в негодность, не отвечает актуальным строительным стандартам и эстетическим требованиям;</li>
                        <li>когда заказчик планирует сменить функциональное предназначение здания, например, реконструировать
                            производственный объект в коммерческий или складской;</li>
                        <li>когда требуется перепланировка внутреннего пространства, улучшение его показателей комфорта и безопасности.</li>
                    </ul>
                    <p>
                        Капитальный и текущий ремонт зданий намного более сложен, чем первоначальное строительство. Трудность
                        состоит в том, что объект является неотъемлемой частью коммерческой или административной окружающей среды,
                        связан с ней технологически и эстетически. Поэтому наружный ремонт зданий требует исключительно
                        персонального подхода, благодаря которому отремонтированный объект недвижимости становится образцовым
                        примером современной городской архитектуры.
                    </p>
                    <p>Команда профессионалов осуществляет полный комплекс работ по ремонту зданий и сооружений в Самаре:</p>
                    <ul>
                        <li>укрепление фундамента и его гидроизоляцию;</li>
                        <li>ремонт, отделка и утепление стен;</li>
                        <li>кровельные работы;</li>
                        <li>замена оконных конструкций;</li>
                        <li>монтаж водопровода, канализации и отопления;</li>
                        <li>установка систем кондиционирования и вентиляции;</li>
                        <li>другие ремонтные, общестроительные и отделочные работы.</li>
                    </ul>
                    <p>
                        Мы имеем колоссальный опыт в сфере капитального ремонта административных зданий, объектов общественной,
                        коммерческой и производственной инфраструктуры. В результате применения современных материалов,
                        оборудования и ремонтных технологий удается значительно улучшить внешний вид фасада и уровень
                        внутреннего комфорта помещений.
                    </p>
                    <p>
                    Реконструкция и ремонт зданий и сооружений компании начинается с детального анализа их состояния. 
                    По результатам исследования специалисты разрабатывают смету с перечнем необходимых работ, их стоимостью и 
                    сроками выполнения. После заключения договора профессионалы «Кирстрой» приступают к поставленным задачам. 
                    Если вы находитесь в поисках ответственного и добросовестного подрядчика в сфере реставрации и ремонта зданий
                     в Самаре, звоните нам по телефонам или заполните онлайн-заявку. Мы всегда открыты к сотрудничеству и новым проектам!  
                    </p>
                </div>
            }
        </Services>
    )

}

export default RepairZdaniy