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
				...action.data,
				isAuth: true,
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

export const setAuthUserDataAC = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const setLoginInUserProfileDataAC = (profileData) => {
	return {
		type: SET_LOGIN_IN_USER_PROFILE_DATA,
		loginInUserProfileData: profileData
	}
}
export const setLoginInUserContactsAC = (loginInUserContacts) => ({ type: SET_LOGIN_IN_USER_CONTACTS, loginInUserContacts })

//thunk=========================================

export const getAuthUserData = () => (dispatch) => {
	let responceUserId;
	authAPI.me()
		.then(responce => {
			if (responce.data.resultCode === 0) {
				let { id, email, login } = responce.data.data;
				responceUserId = responce.data.data.id;

				dispatch(setAuthUserDataAC(id, email, login));
				if (responceUserId) {
					authAPI.responceUserId(responceUserId)
						.then(responceProfileData => {
							dispatch(setLoginInUserProfileDataAC(responceProfileData.data));
							dispatch(setLoginInUserContactsAC(responceProfileData.data.contacts));
						})
				}
			}
		})
}




export default authReducer;