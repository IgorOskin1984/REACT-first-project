import React from "react";
import { NavLink } from "react-router-dom";
import style from './../Dialogs.module.css'

const setActive = ({ isActive }) => isActive ? style.activeLink : '';

const DialogItem = ({id, name }) => {
	return (
		<div>
			<NavLink to={id} className={setActive}>
				{name}
			</NavLink>
		</div>
	)
}
export default DialogItem;