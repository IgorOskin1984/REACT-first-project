import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { loginTC, logoutTC } from "../../redax/authReducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import style from './../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field component={Input}
					name={'email'}
					placeholder='email'
					validate={[required]}
					type="text" />
			</div>
			<div>
				<Field component={Input}
					name={'password'}
					placeholder='password'
					validate={[required]}
					type="password" />
			</div>
			<div>
				<Field component={Input}
					name={'rememberMe'}
					type="checkbox" /> remember me
			</div>
			{ props.error &&
			<div className={style.formSummaryError}>
				{props.error}
			</div>
			}
			<div>
				<button>login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'loginForma' })(LoginForm)

const LoginPage = (props) => {

	let onSubmit = (formData) => {
		props.loginTC(formData.email, formData.password, formData.rememberMe);
	}

	if(props.isAuth) {
		return <Navigate to={'/profile'} />
	}

	return <div>
		<h1>This is login page</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps,
	{ loginTC, logoutTC })
	(LoginPage);