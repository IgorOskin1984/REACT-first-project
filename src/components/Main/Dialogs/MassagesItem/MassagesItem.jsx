import React from "react";
import style from './../Dialogs.module.css'

const MassagesItem = ({newMessage}) => {
	return (
		<div className={style.message}>
			{newMessage}
		</div>
	)
}
export default MassagesItem;