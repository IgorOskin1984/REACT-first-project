import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css'

const Header = ({isAuth, login, logoutTC }) => {
	return <>
		<header className={style.header}>
			<span>i am header</span>
			<div className={style.login_block}>
				{isAuth
				? <div>{login} - <button onClick={logoutTC} >Log out</button></div>
				: <NavLink to={'/login'}>Login</NavLink>}
				
			</div>
			
		</header>
		</> 
}

export default Header;