import React, { FC, useEffect, useState } from "react";
import './MainGallery.scss'
import img_11 from '../../images/mainGallery/1-1.png'
import img_12 from '../../images/mainGallery/1-2.jpg'
import img_13 from '../../images/mainGallery/1-3.jpg'
import img_21 from '../../images/mainGallery/2-1.jpg'
import img_22 from '../../images/mainGallery/2-2.jpg'
import img_23 from '../../images/mainGallery/2-3.jpg'

import img_31 from '../../images/mainGallery/3-1.jpg'
import img_32 from '../../images/mainGallery/3-2.jpg'
import img_33 from '../../images/mainGallery/3-3.jpg'
import img_41 from '../../images/mainGallery/4-1.jpg'
import img_42 from '../../images/mainGallery/4-2.jpg'
import img_43 from '../../images/mainGallery/4-3.jpg'
import img_51 from '../../images/mainGallery/5-1.jpg'
import img_52 from '../../images/mainGallery/5-2.jpg'
import img_53 from '../../images/mainGallery/5-3.jpeg'
import img_61 from '../../images/mainGallery/6-1.jpeg'
import img_62 from '../../images/mainGallery/6-2.jpg'
import img_63 from '../../images/mainGallery/6-3.jpg'


import { NavLink } from "react-router-dom";

const MainGallery: FC = () => {
    const [images, setImages] = useState<string[]>([])

    const changeImages = () => {
        let position = 0
        return (() => {
            if(position >= 3) {
                position = 0
            }
            console.log(position)
            const img = [[img_11, img_12, img_13], [img_21, img_22, img_23], [img_31, img_32, img_33] , [img_41, img_42, img_43], [img_51, img_52, img_53] , [img_61, img_62, img_63],]
            const activeImg = []
            for(let i = 0; i<6; i++ ) {
                activeImg.push(img[i][position])
            }
            setImages(activeImg)
            position++
        })
    }

    useEffect(() => {
        const changeImagesFun = changeImages()
        const timerId = setInterval(() => {
            changeImagesFun()
        }, 3000)
        return () => {
            clearTimeout(timerId)
        }
    }, [])

    console.log(images)
    return (
        <div className="mainGallery">
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/stroyka'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${images[0]})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Строительство домов</div>
                        <div className="galleryItem-text">Дома из керамзитобетона. Дома из газобетона. Каркасные дома</div>
                    </div>
                </div>
            </div>
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/stroyka'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${images[1]})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Быстровозводимые дома</div>
                        <div className="galleryItem-text">Услуги по изготовлению и строительству быстровозводимых зданий для любых задач вашего бизнеса</div>
                    </div>
                </div>
            </div>
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/stroyka'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${images[2]})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Ремонты</div>
                        <div className="galleryItem-text">Обеспечение благоприятных и безопасных условий проживания граждан</div>
                    </div>
                </div>
            </div>
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/stroyka'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${images[3]})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Проектирование</div>
                        <div className="galleryItem-text"> Быстровозводимых строений, проектная документация, проектирование домов</div>
                    </div>
                </div>
            </div>
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/stroyka'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${images[4]})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Услуги</div>
                        <div className="galleryItem-text">Фундаменты, СРО</div>
                    </div>
                </div>
            </div>
            <div className="galleryCol">
                <div className="galleryItem" >
                    <NavLink className="galleryItem__link" to='/stroyka'></NavLink>
                    <div className="galleryItem__img" style={{ backgroundImage: `url(${images[5]})` }}></div>
                    <div className="galleryItem__info">
                        <div className="galleryItem-title">Ремонт квартир</div>
                        <div className="galleryItem-text">Черновой ремонт, косметический ремонт, дизайнерский ремонт</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainGallery