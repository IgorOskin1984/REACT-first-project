import React from "react";
import style from './Users.module.css'
import axios from 'axios'
import userLogo from '../../../img/user_image_png.png'

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(responce => {
				this.props.setUsers(responce.data.items)
				this.props.setTotalUsersCount(responce.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
		.then(responce => this.props.setUsers(responce.data.items))
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];
		for (let i = 1; i <=pagesCount; i++ ) {
			pages.push(i)
		}
		return <div>

			<div className={style.pageNumbers}>
				{pages.map( p => {
					return <span className={this.props.currentPage === p && style.selectedPage}
					onClick = {(e) => {this.onPageChanged(p); }}>{p}</span>
				})}
			</div>

			{
				this.props.users.map(user => <div key={user.id} className={style.user_conteiner} >
					<div className={style.discription_block}>
						<div className={style.img_conteiner} >
							<img className={style.uaser_avatar} src={user.photos.small != null ? user.photos.small : userLogo} alt="logo" />
						</div>
						<div>
							{
								user.followed
									? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
									: <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
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
}


export default Users;