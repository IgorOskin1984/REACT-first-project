import React from "react";
import style from './Users.module.css'
import userLogo from '../../../img/user_image_png.png'
import { NavLink } from "react-router-dom";

const Users = ({
	totalUsersCount,
	pageSize,
	currentPage,
	onPageChanged,
	users,
	followingInProgress,
	followThunkCreater,
	unfollowThunkCreater }) => {

	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return <div>

		<div className={style.pageNumbers}>
			{pages.map(p => {
				return <span className={currentPage === p && style.selectedPage}
					onClick={(e) => { onPageChanged(p); }}>{p}</span>
			})
			}
		</div>

		{
			users.map(user => <div key={user.id} className={style.user_conteiner} >
				<div className={style.discription_block}>
					<NavLink to={'../profile/' + user.id}>
						<div className={style.img_conteiner} >
							<img className={style.uaser_avatar} src={user.photos.small != null ? user.photos.small : userLogo} alt="logo" />
						</div>
					</NavLink>
					<div>
						{
							user.followed
								? <button disabled={followingInProgress.some(id => id === user.id)}
									onClick={() => {
										unfollowThunkCreater(user.id)
									}}>Unfollow</button>

								: <button disabled={followingInProgress.some(id => id === user.id)}
									onClick={() => {
										followThunkCreater(user.id)
									}}>Follow</button>
						}
					</div>
				</div>
				<div className={style.discription_conteiner}>
					<div className={style.discription_block}>
						<div>{user.name}</div>
						<div>{user.status}</div>
					</div>
					<div className={style.discription_block}>
						<div>{"user.location.country"}</div>
						<div>{"user.location.city"}</div>
					</div>
				</div>
			</div>)
		}
	</div>
}


export default Users;