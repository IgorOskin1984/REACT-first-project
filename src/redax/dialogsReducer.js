const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

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
	]
}

const dialogsPageReducer = (state = initialState, action) => {
	switch (action.type) {

		case ADD_NEW_MESSAGE:{
			let newMessage = {
				id: '4',
				messageText: action.newMesage
			}

			return  {
				...state,
				messageItemData: [...state.messageItemData, newMessage],
			};
		}

		default:
			return state;
	}
}

export const addNewMessageAC = (newMesage) => ({ type: ADD_NEW_MESSAGE, newMesage })


export default dialogsPageReducer;