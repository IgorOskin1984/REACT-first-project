const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const APDATE_NEW_MESSAGE_TEXT = 'APDATE-NEW-MESSAGE-TEXT';

export const addNewMessageActionCreator = () => ({ type: ADD_NEW_MESSAGE })

export const apdateNewMessageTextActionCreator = (text) => ({
	type: APDATE_NEW_MESSAGE_TEXT,
	newMessageText: text
})

let initialState = {
	dialogItemUserData: [
		{ name: 'Ihor', id: '1' },
		{ name: 'Dimon', id: '2' },
		{ name: 'Antony', id: '3' },
	],
	messageItemData: [
		{ id: '1', messageText: "Hello World" },
		{ id: '2', messageText: "How are you" },
		{ id: '3', messageText: "ok" },
	],
	newMesage: ''
}

const dialogsPageReducer = (state = initialState, action) => {
	switch (action.type) {

		case ADD_NEW_MESSAGE:{
			let newMessage = {
				id: 4,
				messageText: state.newMesage
			}

			return  {
				...state,
				messageItemData: [...state.messageItemData, newMessage],
				newMesage: ""
			};
		}

		case APDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMesage: action.newMessageText
			}

		default:
			return state;
	}
}


export default dialogsPageReducer;