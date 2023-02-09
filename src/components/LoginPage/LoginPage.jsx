import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";


const LoginForm = (props) => {
	//debugger
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					component={Input}
					validate={required}
					name={'loginInput'}
					type="text"
					placeholder="login"
				/>
			</div>
			<div>
				<Field
					component={Input}
					validate={required}
					name = {'passwordInput'}
					type="password"
					placeholder="password"
				/>
			</div>
			<div>
				<Field
					component={Input}
					validate={required}
					name = {'rememberMe'}
					type="checkbox" />remember me
			</div>
			<div>
				<button>sign up</button>
			</div>
		</form>
	)
}

const ReduxLoginForm = reduxForm({form: 'LoginForm'})(LoginForm);
const onLogin = (value) => {
	console.log(value);
}

const LoginPage = (props) => {
	
	return <div>
		<h1>This is login page</h1>
		<ReduxLoginForm onSubmit={onLogin} />
	</div>
}


export default LoginPage;