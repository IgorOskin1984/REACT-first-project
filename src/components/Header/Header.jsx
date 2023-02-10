import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.css'

const Header = (props) => {
	return <>
		<header className={style.header}>
			<span>i am header</span>
			<div className={style.login_block}>
				{props.isAuth
				? <div>{props.login} - <button onClick={props.logoutTC} >Log out</button></div>
				: <NavLink to={'/login'}>Login</NavLink>}
				
			</div>
			
		</header>
		</> 
}

export default Header;