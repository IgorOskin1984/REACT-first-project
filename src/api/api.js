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
		console.warn('Obsolete method. Please use profileAPI.getUserProfile');
		return profileAPI.getUserProfile(userId);
	}
}

export const profileAPI = {
	getUserProfile(userId) {
	return axiosInctance.get(`profile/${userId}`)
		.then(responce => {
			return responce = responce.data
		})
},
	getUserStatus(userId) {
		return axiosInctance.get(`profile/status/${userId}`)
	},
	updateUserStatus(newStatus) {
		return axiosInctance.put(`profile/status`,
		{status: newStatus});
	}
}

//export const profileAPI = {



//	getUserStatus(userId) {
//		return axiosInctance.get(`profile/status/${userId}`)
//	},


//	updateUserStatus(status) {
//		return axiosInctance.put(`profile/status`,
//		{
//			status: status
//		})
//	}
//}

export const authAPI = {
	me() {
		return axiosInctance.get(`auth/me`)
	},
	responceUserId(responceUserId) {
		return axiosInctance.get(`profile/${responceUserId}`)
	}
}