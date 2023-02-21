import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
	users: [],
	pageSize: 50,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
}

const usersPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
			}

		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
			}

		case SET_USERS:
			return {
				...state,
				//users: [...state.users, ...action.users]
				users: action.users
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.count
			}
		case TOOGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		case TOOGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
		default:
			return state;
	}
}
//AC========================================
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export const toogleFollowingProgress = (isFetching, userId) => ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
//thunk ================================================================
export const getUsersThunkCreator = (page, pageSize) => {
	return async (dispatch) => {
		dispatch(toogleIsFetching(true))
		//!оно у меня до этого работало
		//dispatch(setCurrentPage(page))
		const data = await usersAPI.getUsers(page, pageSize)
		dispatch(toogleIsFetching(false))
		dispatch(setUsers(data.items))
		dispatch(setUsersTotalCount(data.totalCount))
	}
}

export const onPageChangedThunkCreater = (pageNumber, pageSize) => async (dispatch) => {
	dispatch(toogleIsFetching(true));
	dispatch(setCurrentPage(pageNumber));

	const data = await usersAPI.getUsers(pageNumber, pageSize)
	dispatch(toogleIsFetching(false));
	dispatch(setUsers(data.items));
}

//*код ниже - пример рефакторинга 2 функций с дублируещимся кодом

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreater ) => {
	dispatch(toogleFollowingProgress(true, userId));		
		const data = await apiMethod(userId)
		if (data.resultCode === 0) {
			dispatch(actionCreater(userId))
		}
		dispatch(toogleFollowingProgress(false, userId));
}

export const unfollowThunkCreater = (userId) => {
	return async (dispatch) => {
		let apiMethod = usersAPI.unfollowAPI;
		let actionCreater = unfollow;

		followUnfollowFlow(dispatch, userId, apiMethod, actionCreater);
	}
}
//*здесь сделано все то же, что и выше, но без лишних переменных 
export const followThunkCreater = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.followAPI, follow);
	}
}

export default usersPageReducer;