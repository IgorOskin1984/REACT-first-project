import React from "react";
import style from './FormsControls.module.css'
//FormsControls

export const Textarea = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={style.formsControls + ' ' + (hasError ? style.error : '')}>
			<div>
				<textarea {...props} {...input}
					cols="30"
					rows="5"
				/>
			</div>
				{hasError && <div><span>{meta.error}</span></div>}
		</div>
	)
}


export const Input = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;
	return (
		<div className={style.formsControls + ' ' + (hasError ? style.error : '')}>
			<div>
				<input {...props} {...input}
					cols="30"
					rows="5"
				/>
			</div>
				{hasError && <div><span>{meta.error}</span></div>}
		</div>
	)
}