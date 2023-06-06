import React, { FC, useState } from "react";
import './Contacts.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { send } from 'emailjs-com';

const Contacts: FC = () => {
    const [userName, setUserName] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [phone, setPhone] = useState<string>("+7")

    const onChangePhone = (e: string) => {
        const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        console.log(e)
        if (e.length === 1 && Number(e)) {
            setPhone("+7" + e)
        }
        else if (Number(e.substring(1)) || "") {
            setPhone(e)
        }

    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("submit")
    }

    const onSend = () => {
        send(
            'service_p6ld4zl',
            'template_ffq5i2x',
            { from_name: "От кого", message: "Текст сообщения", phone: "990" },
            'kjpQu_9IRGMk0L8Rb'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <main className="contacts">
            {/* <section>Контакты в Самаре и области</section> */}
            <Breadcrumb title="Контакты в Самаре и области" />
            <div className="contacts__info">
                <div className="info-city">Самара</div>
                <div className="info-cont">
                    <div className="info__box">
                        <div className="info__box-item">
                            <div className="info-img"><LocationOnIcon sx={{ color: "#fff" }} /></div>
                            <div className="info__box-details">
                                <span className="details-title">Адрес</span>
                                <span className="details-info">г.Самара</span>
                            </div>
                        </div>
                        <div className="info__box-item">
                            <div className="info-img info-img_mail"><EmailIcon sx={{ color: "#fff" }} /></div>
                            <div className="info__box-details">
                                <span className="details-title">E-mail</span>
                                <a className="details-link" href="mailto:test@mail.ru">test@mail.ru</a>
                                <span className="details-info">Для обращения</span>
                            </div>
                        </div>
                    </div>
                    <div className="info__box">
                        <div className="info__box-item">
                            <div className="info-img"><LocalPhoneIcon sx={{ color: "#fff" }} /></div>
                            <div className="info__box-details">
                                <span className="details-title">Телефон</span>
                                <a className="details-link" href="tel:+79879876136">+7 (987) 987-61-36</a>
                            </div>
                        </div>
                        <div className="info__box-item">
                            <div className="info-img info-img_time"><AccessTimeIcon sx={{ color: "#fff" }} /></div>
                            <div className="info__box-details">
                                <span className="details-title">Режим работы</span>
                                <span className="details-info">Пн. – Пт.: с 9:00 до 18:00</span>
                                <span className="details-info">
                                    Консультации в выходные и праздничные дни ведутся по телефону:</span>
                                <span className="details-info">с 10:00 до 20:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts__information">
                <h2>Контактная информация</h2>
                <p>
                    Компания поддерживает политику прозрачной работы с клиентами и обеспечивает все способы
                    коммуникации. Помимо личной встречи в офисе или на территории, удобной клиенту, с нами можно
                    связаться любым удобным способом: по мобильному или посредством электронной
                    почты (Email).
                </p>
                <p>Также доступны мессенджеры: WhatsApp</p>
                <NavLink className="link-company" to="/stroyka/company" >Больше информации о нас <ArrowForwardIosIcon fontSize="small" sx={{ color: "#ff8506" }} /></NavLink>
            </div>
            <hr></hr>
            <div className="form">
                <h3>Оставить заявку</h3>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-input">
                        <div className="form__box">
                            <div className="form__box-item">
                                <span className="form-label">Ваше имя: <span className="required">*</span></span>
                                <input type="text" onChange={e => setUserName(e.target.value)} />
                            </div>
                            <div className="form__box-item">
                                <span className="form-label">Сообщение:</span>
                                <textarea onChange={e => setMessage(e.target.value)}></textarea>
                                <span className="form-label_dop">Описание вашей задачи</span>
                            </div>

                        </div>
                        <div className="form__box">
                            <div className="form__box-item">
                                <span className="form-label">Телефон: <span className="required">*</span></span>
                                <input type="text" placeholder="+7" maxLength={12} onChange={e => onChangePhone(e.target.value)} value={phone} />
                            </div>
                        </div>
                    </div>

                    <div className="form-footer">
                        <div className="pull-left"><label className="required">*</label><label> - Обязательные поля</label></div>
                        <button className="pull-right" type="submit">Отправить</button>
                    </div>
                </form>

            </div>

        </main>
    )
}

export default Contacts