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
			{createField(Input, 'emailFormFieldName', 'email', [required], 'text', null)}
			{createField(Input, 'passwordFormFieldName', 'password', [required], "password", null)}
			{createField(Input, 'rememberMeFormFieldName', null, null, "checkbox", 'remember me')}

			{error &&
				<div className={style.formSummaryError}>
					{error}
				</div>
			}

			{
				captchaUrl &&
				<div>
					<img src={captchaUrl} alt="хз" />
				</div>
			}

			{captchaUrl && createField(
				Input,
				'captchaFormFieldName',
				'Enter symbols from image',
				[required],
				'text',
				null
			)}

			<div>
				<button>login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'loginForma' })(LoginForm)



const LoginPage = (props) => {

	const onSubmit = (formData) => {
		props.loginTC(formData.emailFormFieldName,
			formData.passwordFormFieldName,
			formData.rememberMeFormFieldName,
			formData.captchaFormFieldName);
	}

	if (props.isAuth) {
		return <Navigate to={'/profile'} />
	}

	return <div>
		<h1>This is login page</h1>
		<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
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