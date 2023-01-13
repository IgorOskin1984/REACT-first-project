import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import MassagesItem from './MassagesItem/MassagesItem'
import { addNewMessageActionCreator, apdateNewMessageTextActionCreator } from "../../../redax/dialogsReducer";
import { connect } from "react-redux";

//const DialogsConteiner = (props) => {
//	//console.log(props);
//	//debugger

//	return (
//		<StoreContext.Consumer>
//			{ (store) => {
//					let state = store.getState()
//					let dialogsElementsCreater = state.dialogsPage.dialogItemUserData.map(data => {
//						return <DialogItem name={data.name} id={data.id} />
//					})
//					let messageItemTextCreater = state.dialogsPage.messageItemData.map((data) => {
//						return <MassagesItem text={data.messageText} />
//					})

//					let addNewMessageCallback = () => {
//						store.dispatch(addNewMessageActionCreator());
//					}

//					let uppdateMessageTextCallback = (event) => {
//						let text = event.target.value;
//						store.dispatch(apdateNewMessageTextActionCreator(text));
//					}

//					return (
//						<Dialogs
//							dialogsElementsCreater={dialogsElementsCreater}
//							messageItemTextCreater={messageItemTextCreater}
//							newMesage={state.dialogsPage.newMesage}

//							uppdateMessageTextCallback={uppdateMessageTextCallback}
//							addNewMessageCallback={addNewMessageCallback}
//						/>)
//				}
//			}



//		</StoreContext.Consumer>
//	)

//}

let mapStateToProps = (state) => {
	return {
		newMesage: state.dialogsPage.newMesage,

		dialogsElementsCreater: state.dialogsPage.dialogItemUserData.map(data => {
			return <DialogItem name={data.name} id={data.id} />
		}),
		messageItemTextCreater: state.dialogsPage.messageItemData.map((data) => {
			return <MassagesItem text={data.messageText} />
		})
	}
}

let mapDispatchToProps = (dispatch, state) => {
	return {
		uppdateMessageTextCallback: (event) => {
			let text = event.target.value;
			dispatch(apdateNewMessageTextActionCreator(text))
		},
		addNewMessageCallback: () => {
			dispatch(addNewMessageActionCreator());
		}
	}
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsConteiner;