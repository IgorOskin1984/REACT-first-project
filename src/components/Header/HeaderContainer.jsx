import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {
	getAuthUserData
} from "./../../redax/authReducer";
import {logoutTC} from './../../redax/authReducer'


class HeaderContainer extends React.Component {

	componentDidMount() {
		this.props.getAuthUserData()
	}

	render() {
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => {
	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth,
		loginInUserProfileData: state.auth.loginInUserProfileData,
		loginInUserContacts: state.auth.loginInUserContacts,

	}
}
export default connect(mapStateToProps, {getAuthUserData, logoutTC })(HeaderContainer);