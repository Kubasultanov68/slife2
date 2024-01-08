import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderBtns from "./HeaderBtns";
import HeaderAuth from "./HeaderAuth";

export default () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className="header__nav">

                    <div className="header__left">

                        <HeaderLogo/>
                        <HeaderSearch/>

                    </div>

                    <div className="header__right">

                        <HeaderBtns/>
                        <HeaderAuth/>

                    </div>
                </nav>
            </div>
        </header>
    )
};
