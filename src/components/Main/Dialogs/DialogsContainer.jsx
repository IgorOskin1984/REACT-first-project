import React from "react";
import DialogsUserName from "./DialogsUserName/DialogsUserName";
import Dialogs from "./Dialogs";
import MassagesItem from './MassagesItem/MassagesItem'
import { addNewMessageAC } from "../../../redax/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirectNavigate";
import { compose } from "redux";

let mapStateToProps = (state) => {
	return {
		//newMesage: state.dialogsPage.newMesage,

		dialogsUserNameCreater: state.dialogsPage.dialogItemUserData.map(data => {
			return <DialogsUserName name={data.name} id={data.id} isAuth = {data.isAuth} />
		}),
		messagesCreater: state.dialogsPage.messageItemData.map((data) => {
			return <MassagesItem newMessage={data.messageText} />
		})
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addNewMessageCallback: (newMessage) => {
			dispatch(addNewMessageAC(newMessage));
		}
	}
}
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)