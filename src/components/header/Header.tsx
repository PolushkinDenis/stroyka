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
                    СТРОЙКА.РФ
                </NavLink>
                <div className="header__type">
                    <div className="header__type-text">Проектно-строительная компания</div>
                    <button className="header__type-button"><div className="header-button"></div> САМАРА</button>
                </div>
                <div className="header__contacts">
                    <a href="tel:+79879876136">+7 (987) 987-61-36</a>

                </div>
                <div className="header__contacts-mob">
                    {/* PHONE */}
                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <LocalPhoneIcon />
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
                            <IconButton sx={{ mb: 2 }}>
                                <CloseIcon onClick={toggleDrawer(false)} />
                            </IconButton>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ backgroundColor: '#ff8506', color: "#fff", fontFamily: `'Comfortaa', cursive` }}
                                >
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive` }}>О КОМПАНИИ</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive` }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
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
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive` }}>ПРОЕКТИРОВАНИЕ</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka/carwash">Автомойки</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka/veranda">Веранды</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka/garage">Гаражи</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka/roof">Крыши</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka/mansardy">Мансарды</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka/sooruzhenie">Сооружения</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka/fasad">Фасады</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka/fundament">Фундамент</NavLink>
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
                                        <NavLink className="header__link" to="/stroyka">Скоро...</NavLink>
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
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive` }}>БЫСТРОВОЗВОДИМЫЕ ЗДАНИЯ</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka">Скоро...</NavLink>
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
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive` }}>УСЛУГИ</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka">Пристройка к дому</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka">Пристройка гаража</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka">Возведение фундамента</NavLink>
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
                                        <NavLink className="header__link" to="/stroyka">Ремонт балконных плит</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka">Капитальный ремонт квартир</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka">Ремонт зданий</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka">Ремонт частного дома</NavLink>
                                    </Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                        <NavLink className="header__link" to="/stroyka">Ремонт кровли</NavLink>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <div className="contacts__mob-link">
                                <Typography sx={{ fontFamily: `'Comfortaa', cursive`, textDecoration: 'none' }}>
                                    <NavLink className="header__link" to="/stroyka">КОНТАКТЫ</NavLink>
                                </Typography>
                            </div>
                        </Box>
                    </Drawer>
                </div>
            </div>
            <div className="header__nav">
                <nav>
                    <div className="nav-item ">
                        О КОМПАНИИ
                    </div>
                    <div className="nav-item">ПРОЕКТИРОВАНИЕ</div>
                    <div className="nav-item">ПРОЕКТЫ</div>
                    <div className="nav-item">УСЛУГИ</div>
                    <div className="nav-item">РЕМОНТ</div>
                    <div className="nav-item">КОНТАКТЫ</div>
                </nav>
                <div className="navigate__info type-about">
                    <NavLink className="navigate__type-link" to="/stroyka/carwash">Автомойки</NavLink>
                    <NavLink className="navigate__type-link" to="/stroyka/veranda">Веранды</NavLink>
                    <NavLink className="navigate__type-link" to="/stroyka/garage">Гаражи</NavLink>
                    <NavLink className="navigate__type-link" to="/stroyka/garage">Гаражи</NavLink>
                    <NavLink className="navigate__type-link" to="/stroyka/roof">Крыши</NavLink>
                    <NavLink className="navigate__type-link" to="/stroyka/mansardy">Мансарды</NavLink>
                    <NavLink className="navigate__type-link" to="/stroyka/sooruzhenie">Сооружения</NavLink>
                    <NavLink className="navigate__type-link" to="/stroyka/fasad">Фасады</NavLink>
                    <NavLink className="navigate__type-link" to="/stroyka/fundament">Фундамент</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header