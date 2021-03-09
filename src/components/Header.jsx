import React from 'react';
import '../assets/styles/components/Header.css';

const Header = () => {
    return(
        <header className="header">
            <img className="header__img" src="https://github.com/platzi/curso-frontend-escuelajs/blob/master/platzi-video/curso-frontend-developer/assets/logo-platzi-video-BW2.png?raw=true" alt="Platzi Video" />
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src="https://github.com/platzi/curso-frontend-escuelajs/blob/master/platzi-video/curso-frontend-developer/assets/user-icon.png?raw=true" alt="profile" />
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