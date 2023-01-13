import React from "react";
import { Link, NavLink } from "react-router-dom";
import style from './Sidebar.module.css';
import SideFriend from "./SideFriend";


const Sidebar = () => {
	return (
		<aside className={`${style.main__sidebar} ${style.sidebar}`}>
			<nav className={style.sidebar__menu}>
				<ul className={style.sidebar__list}>
					<li className={style.sidebar__item}>
						<NavLink to="/profile" className={style.sidebar__link}>
							Profile
						</NavLink>
					</li>
					<li className={style.sidebar__item}>
						<NavLink to="/dialogs" className={style.sidebar__link}>Dialogs</NavLink>
					</li>
					<li className={style.sidebar__item}>
						<NavLink to='/news' className={style.sidebar__link}>News</NavLink>
					</li>
					<li className={style.sidebar__item}>
						<NavLink to={'/music'} className={style.sidebar__link}>Music</NavLink>
					</li>
					<li className={style.sidebar__item}>
						<NavLink to={'/settings'} className={style.sidebar__link}>Settings</NavLink>
					</li>
					<li className={style.sidebar__item}>
						<NavLink to={'/users'} className={style.sidebar__link}>All users</NavLink>
					</li>
				</ul>
			</nav>

			<div className={style.friendsSection}>
				<span>Friends online</span>
				<SideFriend/>
				<SideFriend/>
				<SideFriend/>
				<SideFriend/>
			</div>
		</aside>
	)
}
export default Sidebar;