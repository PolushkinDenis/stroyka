import { FC } from 'react'
import OrderService from '../orderService/OrderService'

const Consultation: FC = () => {
    const info = "Подробно расскажем о наших услугах, видах работ и типовых проектах, рассчитаем стоимость и подготовим индивидуальное предложение!"
    const title = "ЗАДАТЬ ВОПРОС"
    const header = "Нужна консультация?"
    return (
            <OrderService title={title} info={info} header={header} arrow={true}/>
    )
}

export default Consultation