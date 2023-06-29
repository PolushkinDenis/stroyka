import React, { FC } from "react";
import './Footer.scss'
import { NavLink } from "react-router-dom";
import CarpenterIcon from '@mui/icons-material/Carpenter';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Footer: FC = () => {
    return (
        <footer>
            <div className="footer__content">
                <div className="footer__main">
                    <NavLink to="/stroyka" className="footer__content-logo">
                        <CarpenterIcon sx={{ color: "#ff8506" }} />СТРОЙКА.РФ
                    </NavLink>
                    <p>Строительная компания</p>
                    <p>© 2023 Все права защищены.</p>
                    <div className="cintacts-links">
                        <NavLink target="_blank" to="https://wa.me/+79879876136"><WhatsAppIcon sx={{ color: "#fff" }}/></NavLink>
                        <NavLink to="tel:+79879876136"><PhoneInTalkIcon sx={{ color: "#fff" }}/></NavLink>
                    </div>
                </div>

                <div className="content__box1">
                    <div className="box1">
                        <NavLink to="/stroyka/designing">ПРОЕКТИРОВАНИЕ</NavLink>
                        <NavLink to="/stroyka/services">УСЛУГИ</NavLink>
                        <NavLink to="/stroyka/repair">РЕМОНТ</NavLink>
                    </div>
                    <div className="box1">
                        <NavLink to="/stroyka/about">КОМПАНИЯ</NavLink>
                        <NavLink to="/stroyka/contacts">КОНТАКТЫ</NavLink>
                    </div>
                </div>
                <div className="footer__contact">
                    <div className="footer__contact-phone">
                        <LocalPhoneIcon sx={{ color: "#ff8506" }} />
                        <a href="tel:+79879876136">+7 (987) 987-61-36</a>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer