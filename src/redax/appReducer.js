import { getAuthUserData } from "./authReducer";

const SET_INITIALIZED_SUCCESS = 'React-Course-network/app/SET_INITIALIZED_SUCCESS'

let initialState = {
	initializedSuccess: false
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED_SUCCESS: {
			return {
				...state,
				initializedSuccess: true
			}
		}

		default: {
			return state;
		}
	}
}

//AC
const setInitializedSuccessAC = () => ({ type: SET_INITIALIZED_SUCCESS });
//TC
export const autoficationTC = () => async (dispatch) => {
	let promise = await dispatch(getAuthUserData());
	Promise.all([promise])
	dispatch(setInitializedSuccessAC())
}
//export const autoficationTC = () => (dispatch)  => {
//	let promise = dispatch(getAuthUserData());
//	Promise.all([promise])
//	.then(()=> {
//		dispatch(setInitializedSuccessAC())
//	})
//}