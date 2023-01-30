import React from "react";
import { NavLink } from "react-router-dom";
import style from './../Dialogs.module.css'

const setActive = ({ isActive }) => isActive ? style.activeLink : '';

const DialogItem = (props) => {
	//console.log(props)
	return (
		<div>
			<NavLink to={props.id} className={setActive}>
				{props.name}
			</NavLink>
		</div>
	)
}
export default DialogItem;