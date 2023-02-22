import React from "react";
import { Paginator } from "../../common/Paginator/Paginator";
import UserItem from "./UserItem";

const Users = ({
	totalUsersCount,
	pageSize,
	currentPage,
	onPageChanged,
	users,
	...props }) => {



	return <div>
		<Paginator
			totalUsersCount={totalUsersCount}
			pageSize={pageSize}
			currentPage={currentPage}
			onPageChanged={onPageChanged}
		/>

		{users.map(mapUser =>
			<UserItem
				key={mapUser.id}
				user={mapUser}
				followingInProgress={props.followingInProgress}
				unfollowThunkCreater={props.unfollowThunkCreater}
				followThunkCreater={props.followThunkCreater}
			/>
		)}
	</div>
}


export default Users;