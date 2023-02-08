import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import style from './Dialogs.module.css';

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={'textarea'}
					name={'newMessageBody'}
					placeholder={'type a message'} />
			</div>
			<div>
				<button>send message</button>
			</div>
		</form>
	)
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

const Dialogs = (props) => {
	if (!props.isAuth) {
		return  <Navigate to={'/login'} />
	}
	let addNewMessage = (value) =>{
		props.addToStateNewMessage(value.newMessageBody);
	}
	return (
		<div>
			<AddMessageFormRedux onSubmit={addNewMessage} />

			<div className={style.dialogsUsersNames}>
				<div className={style.dialogsItem}>
					{props.dialogsElementsCreater}
				</div>

				<div className={style.messagesBlock}>
					{props.messageItemTextCreater}
				</div>
			</div>
		</div>
	)
}
export default Dialogs;