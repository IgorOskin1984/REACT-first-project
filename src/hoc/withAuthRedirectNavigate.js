import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirectNavigate = (state) => {
	return {
		isAuth: state.auth.isAuth
	} 
}

export const withAuthRedirect = (Component) => {
	class RedirectNavigateComponent extends React.Component {
		render() {
			if(!this.props.isAuth) return <Navigate to = '/login'/>
			return <Component {...this.props}/>
		}
	}
	let ConnectedRedirectNavigateComponent = connect(mapStateToPropsForRedirectNavigate)(RedirectNavigateComponent)
	return ConnectedRedirectNavigateComponent;
}