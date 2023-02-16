import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_IN_USER_PROFILE_DATA = 'SET_LOGIN_IN_USER_PROFILE_DATA';
const SET_LOGIN_IN_USER_CONTACTS = 'SET_LOGIN_IN_USER_CONTACTS';


let initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
	loginInUserContacts: null,
	loginInUserProfileData: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload
			}
		}

		case SET_LOGIN_IN_USER_PROFILE_DATA: {
			return {
				...state,
				loginInUserProfileData: action.loginInUserProfileData
			}
		}

		case SET_LOGIN_IN_USER_CONTACTS: {
			return {
				...state,
				loginInUserContacts: action.loginInUserContacts
			}
		}

		default:
			return state;
	}
}

export const setAuthUserDataAC = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const setLoginInUserProfileDataAC = (profileData) => {
	return {
		type: SET_LOGIN_IN_USER_PROFILE_DATA,
		loginInUserProfileData: profileData
	}
}
export const setLoginInUserContactsAC = (loginInUserContacts) => ({ type: SET_LOGIN_IN_USER_CONTACTS, loginInUserContacts })

//thunk=========================================

export const getAuthUserData = () => (dispatch) => {
	authAPI.me()
		.then(responce => {
			if (responce.data.resultCode === 0) {
				let { id, email, login } = responce.data.data;
				dispatch(setAuthUserDataAC(id, email, login, true));
				if (id) {
					authAPI.responceUserId(id)
					.then(responceProfileData => {
						dispatch(setLoginInUserProfileDataAC(responceProfileData.data));
						dispatch(setLoginInUserContactsAC(responceProfileData.data.contacts));
					})
				}
			}
		})
}
export const loginTC = (email, password, rememberMe) => (dispatch) => {
	authAPI.login(email, password, rememberMe)
		.then(responce => {
			if (responce.data.resultCode === 0) {
				dispatch(getAuthUserData());
			} else {
				let message = responce.data.messages.length > 0 ? responce.data.messages : 'some error'
				dispatch(stopSubmit('loginForma', {_error: message}))
			}
		})
}
export const logoutTC = () => (dispatch) => {
	authAPI.logout()
		.then(responce => {
			if (responce.data.resultCode === 0) {
				dispatch(setAuthUserDataAC(null, null, null, false));
			}
		})
}




export default authReducer;