import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { loginTC, logoutTC } from "../../redax/authReducer";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import style from './../common/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {

	return (
		<form onSubmit={handleSubmit} >
			{createField(Input, 'email', 'email', [required], 'text', null)}
			{createField(Input, 'password', 'password', [required], "password", null)}
			{createField(Input, 'rememberMe', null, null, "checkbox", 'remember me')}

			{error &&
				<div className={style.formSummaryError}>
					{error}
				</div>
			}
			{
				captchaUrl &&
				<div>
					<img src={captchaUrl} alt="captchaUrl" />
				</div>
			}

			{captchaUrl &&
				createField(
					Input,
					'captchaServerName',
					'Enter the symbols from image',
					[required],
					'text',
					null
				)
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
		props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captchaServerName);
	}

	if (props.isAuth) {
		return <Navigate to={'/profile'} />
	}

	return <div>
		<h1>This is login page</h1>
		<LoginReduxForm onSubmit={onSubmit}
			captchaUrl={props.captchaUrl}
		/>
	</div>
}
const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		captchaUrl: state.auth.captchaUrl
	}
}

export default connect(mapStateToProps,
	{ loginTC, logoutTC })
	(LoginPage);