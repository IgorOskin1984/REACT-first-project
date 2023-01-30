import React from "react";
import style from './Users.module.css'
import userLogo from '../../../img/user_image_png.png'
import { NavLink } from "react-router-dom";

const Users = (props) => {
	//console.log(props);

	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return <div>

		<div className={style.pageNumbers}>
			{pages.map(p => {
				return <span className={props.currentPage === p && style.selectedPage}
					onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
			})
			}
		</div>

		{
			props.users.map(user => <div key={user.id} className={style.user_conteiner} >
				<div className={style.discription_block}>
					<NavLink to={'../profile/' + user.id}>
						<div className={style.img_conteiner} >
							<img className={style.uaser_avatar} src={user.photos.small != null ? user.photos.small : userLogo} alt="logo" />
						</div>
					</NavLink>
					<div>
						{
							user.followed
								? <button disabled = {props.followingInProgress.some(id => id === user.id)}
								onClick = {() => {
									props.unfollowThunkCreater(user.id)
								}}>Unfollow</button>

								: <button disabled = {props.followingInProgress.some(id => id === user.id)}
								onClick = {() => {
									props.followThunkCreater(user.id)
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