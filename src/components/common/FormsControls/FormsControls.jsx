import React from "react";
import { Field } from "redux-form";
import style from './FormsControls.module.css'

const FormsControl = ({ input, meta: {touched, error}, children}) => {
	const hasError = touched && error;
	return (
		<div className={style.formsControls + ' ' + (hasError ? style.error : '')}>
			<div>
				{children}
			</div>
			{hasError && <span>{error}</span>}
		</div>
	)
}

export const Textarea = (props) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>
	)
}
export const Input = (props) => {
	const { input, meta, child, ...restProps } = props;
	return (
		<FormsControl {...props}><input {...input} {...restProps} /></FormsControl>
	)
}

export const createField = (
	componentValue,
	nameValue,
	placeholderValue = '',
	validateValue = null,
	typeValue = '',
	text = '') => {
	return (
		<div>
			<Field component={componentValue}
				name={nameValue}
				placeholder={placeholderValue}
				validate={validateValue}
				type={typeValue}
				/> {text}
		</div>
	)
}