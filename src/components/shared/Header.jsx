import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import userSvg from '../../assets/svg/user.svg';
import addSvg from '../../assets/svg/add.svg';
import { useSelector } from 'react-redux';

const Header = () => {

    const auth = useSelector(state => state.auth);

    const renderLoggedInLinks = () => {
        return (
            <nav className="header-menu">
                <Link to="/upload" className="header-menu__link">
                    <img src={addSvg} alt="Add" />
                    <span>Ürün Ekle</span>
                </Link>
                <Link to="/account" className="header-menu__link">
                    <img src={userSvg} alt="User" />
                    <span>Hesabım</span>
                </Link>
            </nav>
        )
    }


    const renderNonLoggedInLinks = () => {
        return (
            <nav className="header-menu">
                <Link to="/upload" className="header-menu__link">
                    <img src={addSvg} alt="Add" />
                    <span>Ürün Ekle</span>
                </Link>
                <Link to="/login" className="header-menu__link">
                    <img src={userSvg} alt="User" />
                    <span>Giriş Yap</span>
                </Link>
            </nav>
        )
    }


    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/" className="header__logo">
                    <img src={logo} alt="logo" />
                </Link>
                {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
            </div>
        </header>
    )
}

export default Header