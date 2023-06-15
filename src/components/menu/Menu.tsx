import React, { FC } from 'react'
import './Menu.scss'
import { IMenu } from '../../types/IMenu'
import { NavLink } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface MenuProps {
    list: IMenu[]
}

const Menu: FC<MenuProps> = ({ list }) => {
    return (
        <aside className='menu'>
            {list.map(link => (
                <NavLink className="menu-link" to={link.href}>{link.title} <ArrowForwardIosIcon sx={{ fontSize: "small" }} /></NavLink>
            ))}
            <div className='menu-info'> 
                Мы строим то, что вам нравится.
            </div>
        </aside>
    )
}

export default Menu