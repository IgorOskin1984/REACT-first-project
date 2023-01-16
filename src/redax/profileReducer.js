const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';



let initialState = {
	postBodyData: [
		{
			id: '1',
			text: 'Helo world',
			postLikeCounter: '11'
		}
	],
	newPostText: '',
	profile: null
}

const profilePageReducer = (state = initialState, action) => {

	//debugger

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

		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }

		default:
			return state;
	}
}

//action creaters------------------------------------------
export const apdateNewPostTextActionCreator = (text) => {
	return {
		type: APDATE_NEW_POST_TEXT,
		newText: text
	}
}
export const addNewPostActionCreator = () => ({ type: ADD_POST })





export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })


export default profilePageReducer;