import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {
	follow,
	setCurrentPage,
	setUsers,
	setUsersTotalCount,
	toogleIsFetching,
	unfollow
} from '../../../redax/usersReducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toogleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(responce => {
				this.props.toogleIsFetching(false)
				this.props.setUsers(responce.data.items)
				this.props.setUsersTotalCount(responce.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.toogleIsFetching(true)
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(responce => {
				this.props.toogleIsFetching(false);
				this.props.setUsers(responce.data.items);
			})
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				onPageChanged={this.onPageChanged}
				currentPage={this.props.currentPage}
				users={this.props.users}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
			/>
		</>
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}
//let mapDispatchToProps = (dispatch) => {
//	return {
//		follow: (userId) => {
//			dispatch(followAC(userId))
//		},
//		unfollow: (userId) => {
//			dispatch(unfollowAC(userId))
//		},
//		setUsers: (users) => {
//			dispatch(setUsersAC(users))
//		},
//		setCurrentPage: (pageNumber) => {
//			dispatch(setCurrentPageAC(pageNumber))
//		},
//		setTotalUsersCount: (totalCount) => {
//			dispatch(setUsersTotalCountAC(totalCount))
//		},
//		toogleIsFetching: (isFetching) => {
//			dispatch(toogleIsFetchingAC(isFetching))
//		}
//	}
//}





export default connect(mapStateToProps,
	{ follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toogleIsFetching })
	(UsersContainer);