import React, { FC, useState } from "react";
import './Header.scss'
// import { IconName } from "react-icons/bs";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from "@mui/icons-material/Close";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Header: FC = () => {
    const [open, setState] = useState(false);
    const toggleDrawer = (open: boolean) => () => {
        setState(open);
    };

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <header>
            <div className="header__main">
                <NavLink to="/stroyka" className="header__logo">
                    <img src={logo} /><span>СТРОЙКА.РФ</span>
                </NavLink>
                <div className="header__type">
                    <div className="header__type-text">Строительная компания</div>
                    <button className="header__type-button">САМАРА</button>
                </div>
                <div className="header__contacts">
                    <LocalPhoneIcon sx={{ color: "#ff8506" }} />
                    <a href="tel:+79879876136">+7 (987) 987-61-36</a>
                </div>
                <div className="header__contacts-mob">
                    {/* PHONE */}
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <LocalPhoneIcon sx={{ color: "#ff8506" }} />
                        </IconButton>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <a className="phone-number" href="tel:+79879876136">+7 (987) 987-61-36</a>
                            </MenuItem>
                        </Menu>
                    </Box>
                </div>
                <div>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2, display: { xs: 'block', md: 'none', }, }}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        sx={{ mt: 2 }}
                        anchor="left"
                        variant="temporary"
                        open={open}
                        onClose={toggleDrawer(false)}
                    >
                        <Box>
                            <div className="mobile__header">
                                <IconButton sx={{ mb: 2, mt: 2 }}>
                                    <CloseIcon onClick={toggleDrawer(false)} />
                                </IconButton>
                                <NavLink to="/stroyka" onClick={toggleDrawer(false)}>
                                    <img className="mobile__header-logo" src={logo} />
                                    <span>СТРОЙКА.РФ</span>
                                </NavLink>
                            </div>
                            <div className="contacts__mob-link">
                                <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                    <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka">О КОМПАНИИ</NavLink>
                                </Typography>
                            </div>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#ff8506', color: "#fff" }}
                                >
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive` }}>ПРОЕКТИРОВАНИЕ</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/designing/carwash">Автомойки</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/designing/veranda">Веранды</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/designing/garage">Гаражи</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/designing/roof">Крыши</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/designing/mansardy">Мансарды</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/designing/sooruzhenie">Сооружения</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/designing/fasad">Фасады</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/designing/fundament">Фундамент</NavLink>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#ff8506', color: "#fff" }}
                                >
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive` }}>ПРОЕКТЫ</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka">Скоро...</NavLink>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            {/* <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#ff8506', color: "#fff" }}
                                >
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive` }}>БЫСТРОВОЗВОДИМЫЕ ЗДАНИЯ</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka">Скоро...</NavLink>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion> */}
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#ff8506', color: "#fff" }}
                                >
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive` }}>УСЛУГИ</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/services/extension-to-the-house">Пристройка к дому</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/services/garage_extension">Пристройка гаража</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/services/foundation">Возведение фундамента</NavLink>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion sx={{ boxShadow: '0px 0px 0px 0px rgba(0,0,0,0), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#ff8506', color: "#fff", boxShadow: 'none' }}
                                >
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive` }}>РЕМОНТ</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/repair/remont_balcony">Ремонт балконных плит</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/repair/remont_zdaniy">Ремонт зданий</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/repair/remont_home">Ремонт частного дома</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/repair/remont_krovel">Ремонт кровли</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/repair/remont_fasada">Ремонт фасада</NavLink>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <div className="contacts__mob-link">
                                <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                    <NavLink onClick={toggleDrawer(false)} className="header__link" to="/stroyka/contacts">КОНТАКТЫ</NavLink>
                                </Typography>
                            </div>
                            <div className="header__mobil">
                                <p>Строительная компания</p>
                                <p>© 2023 Все права защищены.</p>
                                <div className="header__mobil-links">
                                    <NavLink target="_blank" to="https://wa.me/+79879876136"><WhatsAppIcon sx={{ color: "#333" }} /></NavLink>
                                    <NavLink to="tel:+79879876136"><PhoneInTalkIcon sx={{ color: "#333" }} /></NavLink>
                                </div>
                            </div>
                        </Box>
                    </Drawer>
                </div>
            </div>
            <nav className="navbar">
                <NavLink className="nav-item" to='/stroyka'>О КОМПАНИИ</NavLink>
                <div className="dropdown">
                    <button className="dropbtn">ПРОЕКТИРОВАНИЕ
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <div className="dropdown-content-mainLink">
                            <NavLink className="navigate__type-mainLink" to="/stroyka/designing">Проектирование</NavLink>
                            <div className="vl"></div>
                        </div>
                        <NavLink className="navigate__type-link" to="/stroyka/designing/carwash">Автомойки</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/designing/veranda">Веранды</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/designing/garage">Гаражи</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/designing/roof">Крыши</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/designing/mansardy">Мансарды</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/designing/sooruzhenie">Сооружения</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/designing/fasad">Фасады</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/designing/fundament">Фундамент</NavLink>
                    </div>
                </div>
                <div className="nav-item">ПРОЕКТЫ</div>
                <div className="dropdown">
                    <button className="dropbtn">УСЛУГИ
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <div className="dropdown-content-mainLink">
                            <NavLink className="navigate__type-mainLink" to="/stroyka/services">Услуги</NavLink>
                            <div className="vl"></div>
                        </div>
                        <NavLink className="navigate__type-link" to="/stroyka/services/extension-to-the-house">Пристройка к дому</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/services/garage_extension">Пристройка гаража</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/services/foundation">Возведение фундамента</NavLink>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">РЕМОНТ
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <div className="dropdown-content-mainLink">
                            <NavLink className="navigate__type-mainLink" to="/stroyka/repair">Ремонт</NavLink>
                            <div className="vl"></div>
                        </div>
                        <NavLink className="navigate__type-link" to="/stroyka/repair/remont_balcony">Ремонт балконных плит</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/repair/remont_zdaniy">Ремонт зданий</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/repair/remont_home">Ремонт частного дома</NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/repair/remont_krovel">Ремонт кровли </NavLink>
                        <NavLink className="navigate__type-link" to="/stroyka/repair/remont_fasada">Ремонт фасада </NavLink>

                    </div>
                </div>
                <NavLink to='/stroyka/contacts' className="nav-item">КОНТАКТЫ</NavLink>
            </nav>
        </header>
    )
}

export default Header