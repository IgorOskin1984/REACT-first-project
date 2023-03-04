import React from "react";
import style from './ProfileInfo.module.css'
import { createField, Input, Textarea } from "../../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import { Contact } from "./ProfileInfo";

const ProfileDataForm = ({ handleSubmit, profile }) => {
	return (
		<form onSubmit={handleSubmit} >
			<div>
				<p>
					<button onClick={() => { }}>save</button>
				</p>
			</div>

			<div>
				<p>
					<span className={style.boldSpan}>My name</span>: {
						createField(
							Input,
							'fullName',
							'user nickName',
							null,
							'text',
							null
						)
					}
				</p>
			</div>

			<div>
				<p>
					<span className={style.boldSpan}>Looking for a job</span>: {
						createField(
							Input,
							'lookingForAJob',
							'user nickName',
							null,
							'checkbox',
							'YES or NO'
						)
					}
				</p>
			</div>

			<div>
				<p>
					<span className={style.boldSpan}>My profetional skills</span>: {
						createField(
							Textarea,
							'lookingForAJobDescription',
							'My skills is',
							null,
							null,
							null
						)
					}
				</p>
			</div>

			<div>
				<p>
					<span className={style.boldSpan}>About me</span>: {
						createField(
							Textarea,
							'AboutMe',
							'About me',
							null,
							null,
							null
						)
					}
				</p>
			</div>

			<div>
				<span className={style.boldSpan}>Contacts</span>: {Object.keys(profile.contacts).map(key => {
					return (
						<li>
							<span className={style.boldSpan}>{key}</span>:
							{createField(
								Input,
								key,
								key,
								null,
								'text',
								null
							)}
						</li>
					)
				})}
			</div>
		</form>
	)
}

const ProfileDataReduxForm = reduxForm({ form: 'profileEditForm' })(ProfileDataForm)

export default ProfileDataReduxForm;