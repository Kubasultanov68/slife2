import React, { useState } from "react";
import Avatar from "../../../components/Avatar";
import { CiLogout, CiSettings } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import {FaAngleDown} from "react-icons/fa";
import HeaderAuthTheme from "./HeaderAuthTheme";

const YourComponent = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <button className="header__auth" onMouseEnter={toggleMenu} onMouseLeave={closeMenu}>
                <Avatar className="header__auth-avatar" src="" />
                <div className={`header__auth-menu ${isMenuOpen ? "open" : ""}`}>
                    <button className="header__auth-btn user" onClick={closeMenu}>
                        <Avatar src="" className="header__auth-btn_icon" />
                        My name
                    </button>
                    <button className="header__auth-btn">
                        <CiSettings className="header__auth-btn_icon" />
                        Настройки
                    </button>
                    <HeaderAuthTheme/>
                    <button className="header__auth-btn">
                        <CiLogout className="header__auth-btn_icon" />
                        Выйти
                    </button>
                </div>
                <div className="header__auth-menu_bg"></div>
            </button>
        </>
    );
};

export default YourComponent;
