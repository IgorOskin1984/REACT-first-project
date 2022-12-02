import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from './Dialogs.module.css';
import MassagesItem from './MassagesItem/MassagesItem'
import { addNewMessageActionCreator, apdateNewMessageTextActionCreator } from "../../../redax/dialogsReducer";

const Dialogs = (props) => {
	//console.log(props);



	let dialogsElementsCreater = props.state.dialogItemUserData.map(data => {
		return <DialogItem name={data.name} id={data.id} />
	})
	let messageItemTextCreater = props.state.messageItemData.map((data) => {
		return <MassagesItem text={data.messageText} />
	})

	//let newMessageText = React.createRef();

	let addNewMessageLocal = () => {
		props.dispatch(addNewMessageActionCreator());
	}

	let uppdateMessageTextLocal = (event) => {
		//let text = newMessageText.current.value;
		let text = event.target.value;
		props.dispatch(apdateNewMessageTextActionCreator(text));
	}


	return (
		<div>
			<div className={style.dialogsUsersNames}>
				<div className={style.dialogsItem}>
					{dialogsElementsCreater}
				</div>


				<div className={style.messagesBlock}>
					{messageItemTextCreater}
				</div>
			</div>
			<div>
				<input
					onChange={uppdateMessageTextLocal}
					//ref={newMessageText}
					value={props.state.newMesage}
					placeholder='type your message'
					name="" id="" cols="30" rows="3"
				></input>
				<button onClick={addNewMessageLocal}>send</button>
			</div>
		</div>
	)

}

export default Dialogs;