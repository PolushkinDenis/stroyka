import React, { FC } from "react";
import './MainGallery.scss'
import img_11 from '../../images/mainGallery/1-1.png'
import img_12 from '../../images/mainGallery/1-2.jpg'
import img_13 from '../../images/mainGallery/1-3.jpg'
import { NavLink } from "react-router-dom";

const MainGallery: FC = () => {
    return (
        <div className="mainGallery">
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${img_11})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Строительство домов</div>
                        <div className="galleryItem-text">Услуги по изготовлению и строительству быстровозводимых зданий для любых задач вашего бизнеса</div>
                    </div>
                </div>
            </div>
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${img_11})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Строительство домов</div>
                        <div className="galleryItem-text">Услуги по изготовлению и строительству быстровозводимых зданий для любых задач вашего бизнеса</div>
                    </div>
                </div>
            </div>
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${img_11})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Строительство домов</div>
                        <div className="galleryItem-text">Услуги по изготовлению и строительству быстровозводимых зданий для любых задач вашего бизнеса</div>
                    </div>
                </div>
            </div>
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${img_11})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Строительство домов</div>
                        <div className="galleryItem-text">Услуги по изготовлению и строительству быстровозводимых зданий для любых задач вашего бизнеса</div>
                    </div>
                </div>
            </div>
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${img_11})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Строительство домов</div>
                        <div className="galleryItem-text">Услуги по изготовлению и строительству быстровозводимых зданий для любых задач вашего бизнеса</div>
                    </div>
                </div>
            </div>
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${img_11})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Строительство домов</div>
                        <div className="galleryItem-text">Услуги по изготовлению и строительству быстровозводимых зданий для любых задач вашего бизнеса</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainGallery