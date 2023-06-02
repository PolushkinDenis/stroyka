import React, { FC } from 'react'
import './Designing.scss'

interface DesigningProps {
    title: string,
    image: string,
    children: React.ReactNode
}

const Designing: FC<DesigningProps> = ({ image, title, children }) => {
    return (
        <main className='designing'>
            <h1>{title}</h1>
            <div className='designing__container-img'>
                <img className='designing__img' src={image} />
            </div>
            <div className='designing__container'>
                {children}
            </div>
        </main>
    )
}

export default Designing