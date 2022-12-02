import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import MassagesItem from './MassagesItem/MassagesItem'
import { addNewMessageActionCreator, apdateNewMessageTextActionCreator } from "../../../redax/dialogsReducer";

const DialogsConteiner = (props) => {
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
		<Dialogs/>
	)

}

export default DialogsConteiner;