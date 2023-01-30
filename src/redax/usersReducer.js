import { usersAPI } from "../api/api";

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
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: true
						}
					}
					return user
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {
							...user,
							followed: false
						}
					}
					return user
				})
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

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export const toogleFollowingProgress = (isFetching, userId) => ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
//thunk ================================================================
export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toogleIsFetching(true))
		usersAPI.getUsers(currentPage, pageSize)
			.then(data => {
				dispatch(toogleIsFetching(false))
				dispatch(setUsers(data.items))
				dispatch(setUsersTotalCount(data.totalCount))
			})
	}
}

export const onPageChangedThunkCreater = (pageNumber, pageSize) => {
	return (dispatch) => {
		dispatch(toogleIsFetching(true))
		dispatch(setCurrentPage(pageNumber));
		usersAPI.getUsers(pageNumber, pageSize)
			.then(data => {
				dispatch(toogleIsFetching(false));
				dispatch(setUsers(data.items));
			})
	}
}

export const unfollowThunkCreater = (userId) => {
	return (dispatch) => {
		dispatch(toogleFollowingProgress(true, userId));
		usersAPI.unfollowAPI(userId)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(unfollow(userId))
				}
				dispatch(toogleFollowingProgress(false, userId));
			})
	}
}

export const followThunkCreater = (userId) => {
	return (dispatch) => {
		dispatch(toogleFollowingProgress(true, userId));
		usersAPI.followAPI(userId)
			.then(data => {
				if (data.resultCode === 0) {
					dispatch(follow(userId))
				}
				dispatch(toogleFollowingProgress(false, userId));
			})
	}
}

export default usersPageReducer;