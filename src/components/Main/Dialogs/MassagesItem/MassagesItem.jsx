import React from "react";
import style from './../Dialogs.module.css'

const MassagesItem = (props) => {
	let newMessage = props.text;
	return (
		<div className={style.message}>
			{newMessage}
		</div>
	)
}
export default MassagesItem;