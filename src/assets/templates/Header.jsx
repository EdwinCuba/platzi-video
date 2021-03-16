import React from 'react';
import { Link } from 'react-router-dom';
import logoPlatzi from '../static/logo-platzi-video-BW2.png';
import userIcon from '../static/user-icon.png';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logoPlatzi} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="profile" />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;