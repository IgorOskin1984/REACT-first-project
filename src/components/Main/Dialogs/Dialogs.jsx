import React from "react";
import style from './Dialogs.module.css';

const Dialogs = (props) => {
	//console.log(props);
	//debugger
	

	return (
		<div>
			<div className={style.dialogsUsersNames}>
				<div className={style.dialogsItem}>
					{props.dialogsElementsCreater}
				</div>


				<div className={style.messagesBlock}>
					{props.messageItemTextCreater}
				</div>
			</div>
			<div>
				<input
					onChange={props.uppdateMessageTextCallback}
					//ref={newMessageText}
					value={props.newMesage}
					placeholder='type your message'
					name="" id="" cols="30" rows="3"
				></input>
				<button onClick={props.addNewMessageCallback}>send</button>
			</div>
		</div>
	)

}

export default Dialogs;