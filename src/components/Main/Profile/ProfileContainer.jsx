import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
	updateUserStatusTC,
	getUserStatusTC,
	getUserProfileThunkCreator,
	savePhotoTC
} from './../../../redax/profileReducer'
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirectNavigate";
import { compose } from "redux";


//устаревший сетод с помощью которого получают данные о user ID и не только из URL
export function withRouter(Children) {
	return (props) => {
		const match = { params: useParams() };
		return <Children {...props} match={match} />
	}
}

class ProfileContainer extends React.Component {




	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			//userId = 27516;
			userId = this.props.autorizedUserId;
			//! у меня нет this.props.history
			//if(!userId) {
			//	this.props.history.push('/login')
			//}
		}
		this.props.getUserProfileThunkCreator(userId)
		//
		this.props.getUserStatusTC(userId)
		//
	}
	componentDidMount() {
		//console.log(this.props);
		this.refreshProfile()
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}
	render() {
		return <>
			<Profile {...this.props}
				savePhoto={this.props.savePhotoTC}
				isOwner={!this.props.match.params.userId}
				profile={this.props.profile}
				status={this.props.status}
				updateUserStatusTC={this.props.updateUserStatusTC}
			//
			/>
		</>
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		//
		status: state.profilePage.status,
		//
		autorizedUserId: state.auth.userId
	}
}

export default compose(
	connect(mapStateToProps,
		{
			getUserProfileThunkCreator,
			//
			getUserStatusTC,
			updateUserStatusTC,
			savePhotoTC
			//
		}),
	withRouter,
	withAuthRedirect
)(ProfileContainer)