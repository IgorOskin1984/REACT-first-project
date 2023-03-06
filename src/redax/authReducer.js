import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'React-Course-network/auth/SET_USER_DATA';
const SET_LOGIN_IN_USER_PROFILE_DATA = 'React-Course-network/auth/SET_LOGIN_IN_USER_PROFILE_DATA';
const SET_LOGIN_IN_USER_CONTACTS = 'React-Course-network/auth/SET_LOGIN_IN_USER_CONTACTS';
const SET_CAPCHA_SUCCESS = 'React-Course-network/auth/SET_CAPCHA_SUCCESS';


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
		case SET_CAPCHA_SUCCESS: {
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

export const setAuthUserDataAC = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth, captchaUrl: null }
})
export const setLoginInUserProfileDataAC = (profileData) => {
	return {
		type: SET_LOGIN_IN_USER_PROFILE_DATA,
		loginInUserProfileData: profileData
	}
}
export const setLoginInUserContactsAC = (loginInUserContacts) => ({ type: SET_LOGIN_IN_USER_CONTACTS, loginInUserContacts })
export const getCaptchaUrlAC = (captchaUrl) => ({ type: SET_CAPCHA_SUCCESS, payload: { captchaUrl } })

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
export const loginTC = (email, password, rememberMe, captchaServerName) => async (dispatch) => {
	const responce = await authAPI.login(email, password, rememberMe, captchaServerName)
	if (responce.data.resultCode === 0) {
		dispatch(getAuthUserData());

	} else {
		if (responce.data.resultCode === 10) {
			dispatch(getCaptchaUrlTC())
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
export const getCaptchaUrlTC = () => async (dispatch) => {
	const responce = await securityAPI.getCaptchaUrlAPI()
	dispatch(getCaptchaUrlAC(responce.data.url));
}

export default authReducer;