import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src="/assets/static/logo-platzi-video-BW2.png" alt="Platzi Video" />
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src="/assets/static/user-icon.png" alt="profile" />
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