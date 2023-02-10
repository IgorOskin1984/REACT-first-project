import React from "react";
import style from './FormsControls.module.css'

const FormsControl = ({input, meta, child, ...props}) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={style.formTextarea + ' ' + ( hasError ? style.error : '')}>
			<div>
				{props.children}
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	)
}

export const Textarea = (props) => {
	const {input, meta, child, ...restProps} = props;
	return (
		<FormsControl {...props}><textarea {...input} {...restProps}/></FormsControl>
	)
}
export const Input = (props) => {
	const {input, meta, child, ...restProps} = props;
	return (
		<FormsControl {...props}><input {...input} {...restProps}/></FormsControl>
	)
}