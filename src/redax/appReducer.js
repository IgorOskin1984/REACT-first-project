import { getAuthUserData } from "./authReducer"

const SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS'

let initialState = {
	initialedSuccess: false
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED_SUCCESS: {
			return {
				...state,
				initialedSuccess: true
			}
		}
		default: {
			return state
		}
	}
}
//AC
const setInitialSuccessAC = () => ({type: SET_INITIALIZED_SUCCESS });
//TC
export const setInitialSuccessTC = () => (dispatch) => {
	let propmise = dispatch(getAuthUserData());
	propmise.then(() => {
		dispatch(setInitialSuccessAC())
	})
}
