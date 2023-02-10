import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
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
				text: action.newPostText,
				postLikeCounter: 0
			};
			return {
				...state,
				postBodyData: [...state.postBodyData, newPost],
			}

		case SET_USER_PROFILE:
			return {
				...state,
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

		default:
			return state;
	}
}

//action creaters------------------------------------------
export const addNewPostActionCreator = (newPost) => {
	return {
		type: ADD_POST,
		newPostText: newPost
	}
}
export const setUserProfile = (profile, userId) => ({ type: SET_USER_PROFILE, profile, userId })
export const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status })

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
				if (responce.data.resultCode === 0) {
					dispatch(setUserStatusAC(status))
				}
			})
	}
}

export default profilePageReducer;