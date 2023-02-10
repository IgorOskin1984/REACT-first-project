import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field component={Input}
				name={'login'}
				validate= {[required]}
				type="text" />
			</div>
			<div>
				<Field component={Input}
				name={'password'}
				validate= {[required]}
				type="password" />
			</div>
			<div>
				<Field component={Input}
				name={'rememberMe'}
				type="checkbox" /> remember me
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