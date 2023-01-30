import axios from "axios";

const axiosInctance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': 'ed4d0a26-b169-4d12-9b57-0dc77d8cb8a5'
	}
})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return axiosInctance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response = response.data
			})
	},
	followAPI(userId) {
		return axiosInctance.post(`follow/${userId}`, {})
			.then(responce => responce.data)
	},
	unfollowAPI(userId) {
		return axiosInctance.delete(`follow/${userId}`)
			.then(responce => {
				return responce.data
			})
	},
	getProfile(userId) {
		return axiosInctance.get(`profile/${userId}`)
			.then(responce => {
				return responce = responce.data
			})
	}
}

export const authAPI = {
	me () {
		return axiosInctance.get(`auth/me`)
	},
	responceUserId (responceUserId) {
		return axiosInctance.get(`profile/${responceUserId}`)
	}
}




//export const headersAuthMeApi = {
//	getAuthMe() {
//		return axiosInctance.get(`auth/me`)
//			.then(responce => {
//				debugger
//				responce = responce.data
//			})
//	},
//	getresponceUserId(responceUserId) {
//		return axiosInctance.get(`${responceUserId}`)
//			.then(responce => {
//				responce = responce.data
//			})
//	}
//}