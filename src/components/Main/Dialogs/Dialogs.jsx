import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreater, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import style from './Dialogs.module.css';

const maxLenth5 = maxLengthCreater(5)

const DialogsForm = ({handleSubmit}) => {
	return (
		<form onSubmit={handleSubmit} >
			<div>
				<Field
					component={Textarea}
					name = {'dialogsFormMessage'}
					validate = {[required, maxLenth5]}
					//ref={newMessageText}
					placeholder='type your message'
				/>
			</div>
			<div>
				<button >send message</button>
			</div>
		</form>
	)
}

const ReduxDialogsForm = reduxForm({ form: 'DialogsInputForm' })(DialogsForm)

const Dialogs = ({addNewMessageCallback, dialogsUserNameCreater, messagesCreater}) => {
	//console.log(props.isAuth);
	//debugger
	//if (!props.isAuth) {
	//	return  <Navigate to={'/login'} />
	//}

	const sendNewMessage = (values) => {
		return addNewMessageCallback(values.dialogsFormMessage);
	}

	return (
		<div>
			<div className={style.dialogsUsersNames}>
				<div className={style.dialogsItem}>
					{dialogsUserNameCreater}
				</div>

				<div className={style.messagesBlock}>
					{messagesCreater}
				</div>
			</div>
			<ReduxDialogsForm onSubmit={sendNewMessage} />
		</div>
	)
}
export default Dialogs;