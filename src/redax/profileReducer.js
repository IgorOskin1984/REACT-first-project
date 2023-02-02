import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
//
const SET_USER_STATUS = 'SET_USER_STATUS';
//


let initialState = {
	postBodyData: [
		{
			id: '1',
			text: 'Helo world',
			postLikeCounter: '11'
		}
	],
	newPostText: '',
	profile: null,
	userId: null,
	//
	status: 'Здесь будет статус'
	//
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

		case SET_USER_PROFILE:
			return { ...state,
				profile: action.profile,
				//!
				userId: action.userId
				//!
			}


		case SET_USER_STATUS:
			return {
				...state,
				status: action.status
			}

		//case SET_STATUS:
		//	return {
		//		...state,
		//		status: action.status
		//	}

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
export const setUserProfile = (profile, userId) => ({ type: SET_USER_PROFILE, profile , userId})
export const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status })
//export const setUserStatusAC = (status) => ({ type: SET_STATUS, status })

//thunk creaters------------------------------------------

export const getUserProfileThunkCreator = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId)
			.then(responce => {
				dispatch(setUserProfile(responce, userId));
			})
	}
}

export const getUserStatusTC = (userId) => {
	return (dispatch) => {
		profileAPI.getUserStatus(userId)
			.then(responce => {
				dispatch(setUserStatusAC(responce.data))
			})
	}
}

export const updateUserStatusTC = (status) => {
	return (dispatch) => {
		profileAPI.updateUserStatus(status)
		.then(responce => {
			if(responce.data.resultCode === 0){
				dispatch(setUserStatusAC(status))
			}
		})
	}
}





// правильный старый код==========================================================

//сокращенный синтаксис
//export const getUserStatusTC = (userId) => (dispatch) => {
//	profileAPI.getUserStatus(userId)
//		.then(responce => {
//			//debugger
//			dispatch(setUserStatusAC(responce.data));
//		})
//}
//export const updateUserStatusTC = (status) => (dispatch) => {
//	profileAPI.updateUserStatus(status)
//		.then(responce => {
//			if (responce.data.resultCode === 0)
//				dispatch(setUserStatusAC(status));
//		})
//}

export default profilePageReducer;