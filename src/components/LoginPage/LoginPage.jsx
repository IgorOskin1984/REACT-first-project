import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field component={'input'} name={'login'} type="text" />
			</div>
			<div>
				<Field component={'input'} name={'password'} type="password" />
			</div>
			<div>
				<Field component={'input'} name={'rememberMe'} type="checkbox" /> remember me
			</div>
			<div>
				<button>login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const LoginPage = (props) => {
	let onSubmit = (formData) => {
		console.log(formData)
	}
	return <div>
		<h1>This is login page</h1>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}


export default LoginPage;