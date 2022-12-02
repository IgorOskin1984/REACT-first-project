import React from "react";
import style from './../Dialogs.module.css'



const MassagesItem = (props) => {
	let message = props.text;
	return (
		<div className={style.message}>
			{message}
		</div>
	)
}
export default MassagesItem;