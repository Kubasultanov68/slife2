import React from "react";
import {IoIosNotificationsOutline} from "react-icons/io";
import {HiOutlineUsers} from "react-icons/hi2";

export default () => {
    return (
        <div className="header__btns">
            <button className="header__btn">
                <HiOutlineUsers className='header__btn-icon'/>
            </button>
            <button className="header__btn">
                <IoIosNotificationsOutline className='header__btn-icon'/>
            </button>
        </div>
    )
};
