import React from "react";
import {CiSearch} from "react-icons/ci";

export default () => {
    return (
        <div className='header__search'>
            <CiSearch className='header__search-icon'/>
            <input type="text" className="header__search-input" placeholder='Поиск...'/>
        </div>
    )
};