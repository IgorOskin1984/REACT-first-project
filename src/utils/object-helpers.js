export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
	return (
		items.map(user => {
			if (user[objPropName] === itemId) {
				return {
					...user,
					...newObjProps
				}
			}
			return user
		})
	) 
}
//*мой вариант. Вроде тоже работало
//export const updateObjectInArray = (users, actionUserId, trueFalse) => {
//	return (
//		users.map(user => {
//			if (user.id === actionUserId) {
//				return {
//					...user,
//					followed: trueFalse
//				}
//			}
//			return user
//		})
//	) 
//}
