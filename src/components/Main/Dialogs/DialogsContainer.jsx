import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import MassagesItem from './MassagesItem/MassagesItem'
import { addNewMessageAC} from "../../../redax/dialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirectNavigate";
import { compose } from "redux";

let mapStateToProps = (state) => {
	return {
		//newMesage: state.dialogsPage.newMesage,

		dialogsElementsCreater: state.dialogsPage.dialogItemUserData.map(data => {
			return <DialogItem name={data.name} id={data.id} isAuth = {data.isAuth} />
		}),
		messageItemTextCreater: state.dialogsPage.messageItemData.map((data) => {
			return <MassagesItem text={data.messageText} />
		})
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addToStateNewMessage: (newMesage) => {
			dispatch(addNewMessageAC(newMesage));
		}
	}
}
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)