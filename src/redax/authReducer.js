import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'React-Course-network/auth/SET_USER_DATA';
const SET_LOGIN_IN_USER_PROFILE_DATA = 'React-Course-network/auth/SET_LOGIN_IN_USER_PROFILE_DATA';
const SET_LOGIN_IN_USER_CONTACTS = 'React-Course-network/auth/SET_LOGIN_IN_USER_CONTACTS';
const SET_CAPTCHA_URL = 'React-Course-network/auth/SET_CAPTCHA_URL';


let initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
	loginInUserContacts: null,
	loginInUserProfileData: null,
	captchaUrl: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case SET_CAPTCHA_URL: {
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
export const getСaptchaUrlAC = (captchaUrl) => ({ type: SET_CAPTCHA_URL, payload: { captchaUrl } })

//thunk=========================================

export const getAuthUserData = () => async (dispatch) => {
	const responce = await authAPI.me();
	if (responce.data.resultCode === 0) {
		let { id, email, login } = responce.data.data;
		dispatch(setAuthUserDataAC(id, email, login, true));
		if (id) {
			const responceProfileData = await authAPI.responceUserId(id)
			dispatch(setLoginInUserProfileDataAC(responceProfileData.data));
			dispatch(setLoginInUserContactsAC(responceProfileData.data.contacts));
		}
	}
}
export const loginTC = (email, password, rememberMe, captcha = null) => async (dispatch) => {
	const responce = await authAPI.login(email, password, rememberMe, captcha)
	if (responce.data.resultCode === 0) {
		dispatch(getAuthUserData());
	} else {
		if (responce.data.resultCode === 10) {
			dispatch(getСaptchaUrlTC())
		}
		let message = responce.data.messages.length > 0 ? responce.data.messages : 'some error'
		dispatch(stopSubmit('loginForma', { _error: message }))
	}
}
export const logoutTC = () => async (dispatch) => {
	const responce = await authAPI.logout()
	if (responce.data.resultCode === 0) {
		dispatch(setAuthUserDataAC(null, null, null, false));
	}
}
export const getСaptchaUrlTC = () => async (dispatch) => {
	const responce = await securityAPI.getСaptchaUrl();
	dispatch(getСaptchaUrlAC(responce.data.url));
}

export default authReducer;