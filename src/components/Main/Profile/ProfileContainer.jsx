import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {updateUserStatusTC, getUserStatusTC, getUserProfileThunkCreator } from './../../../redax/profileReducer'
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirectNavigate";
import { compose } from "redux";

export function withRouter(Children) {
	return (props) => {
		const match = { params: useParams() };
		return <Children {...props} match={match} />
	}
}

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 27516;
		}
		this.props.getUserProfileThunkCreator(userId)
		this.props.getUserStatusTC(userId)
	}
	render() {
		return <>
			<Profile {...this.props} profile={this.props.profile}
			status = {this.props.status} updateUserStatusTC = {this.props.updateUserStatusTC} />
		</>
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status
	}
}

export default compose(
	connect(mapStateToProps,
		{
			getUserProfileThunkCreator,
			getUserStatusTC,
			updateUserStatusTC
		}),
	withRouter,
	//withAuthRedirect
	)(ProfileContainer)