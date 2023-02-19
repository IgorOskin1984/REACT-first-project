import React from 'react';
import { connect } from 'react-redux';
import {
	toogleFollowingProgress,
	getUsersThunkCreator,
	onPageChangedThunkCreater,
	unfollowThunkCreater,
	followThunkCreater
} from '../../../redax/usersReducer';
import Users from './Users';
import Preloader from '../../common/Preloader/Preloader';
//import { withAuthRedirect } from '../../../hoc/withAuthRedirectNavigate';
import { compose } from 'redux';
import { gePageSize, getCurrentPage, getFollowingInProgress, getIsFetching, getTotalUsersCount, getUsers } from '../../../redax/selectors/usersSelector';

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber) => {
		this.props.onPageChangedThunkCreater(pageNumber, this.props.pageSize)
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
				followingInProgress={this.props.followingInProgress}
				toogleFollowingProgress={this.props.toogleFollowingProgress}
				unfollowThunkCreater={this.props.unfollowThunkCreater}
				followThunkCreater={this.props.followThunkCreater}

			/>
		</>
	}
}


let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: gePageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
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

export default compose(
	connect(mapStateToProps,
		{
			toogleFollowingProgress,
			getUsersThunkCreator, onPageChangedThunkCreater, unfollowThunkCreater, followThunkCreater
		}),
	//withAuthRedirect
)(UsersContainer)