import React, {useState} from "react";
import {MdOutlineLightMode} from "react-icons/md";
import {FaAngleDown} from "react-icons/fa";

export default () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <button className="header__auth-btn theme" onMouseEnter={toggleMenu} >
            <MdOutlineLightMode className="header__auth-btn_icon" />
            Тема: системная
            <FaAngleDown className="header__auth-btn_icon end" />
            <div className={`header__auth-btn_menu ${isMenuOpen ? "open" : ""}`}>
                <button>дневная</button>
                <button>ночная</button>
            </div>
        </button>
    )
};
