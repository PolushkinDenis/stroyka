import React, { FC } from "react";
import './Header.scss'
// import { IconName } from "react-icons/bs";

const Header: FC = () => {

    return (
        <header>
            <div className="header__main">
                <div className="header__logo">
                    СТРОЙКА.РФ
                </div>
                <div className="header__type">
                    <div className="header__type-text">Проектно-строительная компания</div>
                    <button className="header__type-button"><div className="header-button"></div> САМАРА</button>
                </div>
                <div className="header__contacts">
                    +7 (987) 987-61-36

                </div>
            </div>
            <div className="header__nav">
                <nav>
                    <div className="nav-item">О КОМПАНИИ</div>
                    <div className="nav-item">ПРОЕКТИРОВАНИЕ</div>
                    <div className="nav-item">ПРОЕКТЫ</div>
                    <div className="nav-item">УСЛУГИ</div>
                    <div className="nav-item">РЕМОНТ</div>
                    <div className="nav-item">КОНТАКТЫ</div>
                </nav>
            </div>
        </header>
    )
}

export default Header