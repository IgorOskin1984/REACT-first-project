import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'exclusive-name/profile-ruducer/ADD-POST';
const SET_USER_PROFILE = 'exclusive-name/profile-ruducer/SET_USER_PROFILE';
const SET_USER_STATUS = 'exclusive-name/profile-ruducer/SET_USER_STATUS';
const SET_USER_PHOTO_SUCCESS = 'exclusive-name/profile-ruducer/SET_USER_PHOTO_SUCCESS';

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
	status: 'Здесь будет статус'
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
		case SET_USER_PHOTO_SUCCESS:
			return {
				...state,
				profile: {
					...state.profile,
					photos: action.userPhoto
				}
			}
		default:
			return state;
	}
}

//action creaters------------------------------------------
export const addNewPostActionCreator = (text) => {
	return {
		type: ADD_POST,
		newPostText: text
	}
}
export const setUserProfile = (profile, userId) => ({ type: SET_USER_PROFILE, profile, userId })
export const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status })
export const setUserPhotoAC = (userPhoto) => ({ type: SET_USER_PHOTO_SUCCESS, userPhoto })

//thunk creaters------------------------------------------
export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
	const responce = await usersAPI.getProfile(userId);
	dispatch(setUserProfile(responce, userId));
}

export const getUserStatusTC = (userId) => async (dispatch) => {
	const responce = await profileAPI.getUserStatus(userId)
	dispatch(setUserStatusAC(responce.data))
}

export const updateUserStatusTC = (status) => async (dispatch) => {
	const responce = await profileAPI.updateUserStatus(status)
	if (responce.data.resultCode === 0) {
		dispatch(setUserStatusAC(status))
	}
}
export const updateUserPhotoTC = (userPhoto) => async (dispatch) => {
	const responce = await profileAPI.addUserPhotoAPI(userPhoto)
	if (responce.data.resultCode === 0) {
		console.log(responce.data.data.photos);
		dispatch(setUserPhotoAC(responce.data.data.photos))
	}
}
//!
//*код ниже - это принцип работы thunk
//export const updateUserStatusTC = (status) => {
//	return (dispatch) => {
//		profileAPI.updateUserStatus(status)
//			.then(responce => {
//				if (responce.data.resultCode === 0) {
//					dispatch(setUserStatusAC(status))
//				}
//			})
//	}
//}
export default profilePageReducer;