const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';

export const addNewPostActionCreator = () => ({ type: ADD_POST })

export const apdateNewPostTextActionCreator = (text) => ({
	type: APDATE_NEW_POST_TEXT,
	newText: text
})

let initialState = {
	postBodyData: [
		{
			id: '1',
			text: 'Helo world',
			postLikeCounter: '11'
		}
	],
	newPostText: ''
}

const profilePageReducer = (state = initialState, action) => {

	switch (action.type) {

		case ADD_POST:
			let newPost = {
				id: 5,
				text: state.newPostText,
				postLikeCounter: 0
			};
			return {
				...state,
				postBodyData: [...state.postBodyData, newPost],
				newPostText: ''
			}

		case APDATE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.newText
			}

		default:
			return state;
	}
}


export default profilePageReducer;