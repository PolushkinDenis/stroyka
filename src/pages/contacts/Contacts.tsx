import React, { FC } from "react";
import './Contacts.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contacts: FC = () => {
    return (
        <main className="contacts">
            <section>Контакты в Самаре и области</section>
            <div className="contacts__info">
                <div className="info-city">Самара</div>
                <div className="info__box">
                    <div className="info__box-item">
                        <div className="info-img"><LocationOnIcon sx={{color: "#fff"}}/></div>
                        <div className="info__box-details">
                            <span>Адрес</span>
                            <span>г.Самара</span>
                        </div>
                    </div>


                </div>

            </div>

        </main>
    )
}

export default Contacts