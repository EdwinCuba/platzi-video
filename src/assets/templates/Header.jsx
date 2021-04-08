import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutRequest } from '../../actions';
import logoPlatzi from '../static/logo-platzi-video-BW2.png';
import userIcon from '../static/user-icon.png';
import gravatar from '../../utils/gravatar.js';
import '../styles/Header.css';

const Header = props => {
	const { user, isLogin, isRegister } = props;
	const hasUser = Object.keys(user).length > 0;

	const logOut = () => {
		props.logOutRequest({});
	}

	const classnames = classNames('header', {
		isLogin,
		isRegister
	})

	return (
		<header className={classnames}>
			<Link to="/">
				<img className="header__img" src={logoPlatzi} alt="Platzi Video" />
			</Link>
			<div className="header__menu">
				<div className="header__menu--profile">
					{hasUser ?
						<img id="profile-icon" src={gravatar(user.email)} alt={user.email} /> :
						<img src={userIcon} alt="profile" />
					}
					<p>Perfil</p>
				</div>
				{hasUser ?
					<ul>
						<li><a href="/">Cuenta</a></li>
						<li>
							<Link to="/" onClick={logOut}>
								Cerrar Sesion
							</Link>
						</li>
					</ul> :
					<ul>
						<li>
							<Link to="/login">
								Iniciar Sesion
							</Link>
						</li>
					</ul>
				}
			</div>
		</header>
	);
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = {
	logOutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);