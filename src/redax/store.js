import profilePageReducer from "./profileReducer";
import dialogsPageReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const APDATE_NEW_MESSAGE_TEXT = 'APDATE-NEW-MESSAGE-TEXT';
const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';

const store = {
	//=================
	//!фун перерисовки
	_callSubscriber() {
		alert('I must rerender DOM-tree');
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
//==============
	_state: {
		profilePage: {
			postBodyData: [
				{ id: '1', text: 'Helo world', postLikeCounter: '11' },
			],
			newPostText: ''
		},
		dialogsPage: {
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
		},
		sidebar: {
		}
	},

	getState() {
		return this._state
	},

	dispatch(action) {
		this._state.profilePage = profilePageReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state);
	}
}

export default store;
window.store = store;