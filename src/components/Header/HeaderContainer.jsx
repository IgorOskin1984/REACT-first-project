import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {
	logoutTC
} from "./../../redax/authReducer";

class HeaderContainer extends React.Component {

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
export default connect(mapStateToProps, { logoutTC })(HeaderContainer);