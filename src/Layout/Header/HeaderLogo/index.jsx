import React from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/logo.svg";

export default () => {
    return (
        <Link to='/' component='h1' className='header__logo'>
            <img src={logo} alt="" className='header__logo-img'/>
            SLIFE
        </Link>
    )
};