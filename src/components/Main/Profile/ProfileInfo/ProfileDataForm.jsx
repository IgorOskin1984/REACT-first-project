import React from "react"
import { reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../../../common/FormsControls/FormsControls"
import style from './ProfileInfo.module.css'
import style2 from './../../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({ handleSubmit, error, profile }) => {
	return (
		<form onSubmit={handleSubmit}>
			{error &&
				<div className={style2.formSummaryError}>
					{error}
				</div>
			}

			<div>
				<p>
					<button onClick={() => { }}>Save</button>
				</p>
			</div>

			<div>
				<p>
					<span className={style.boldSpan}>My name</span>: {
						createField(
							Input,
							"fullName",
							'user name',
							null,
							null,
						)}
				</p>
			</div>


			<div>
				<p>
					<span className={style.boldSpan}>Looking for a job</span>: {
						createField(
							Input,
							'lookingForAJob',
							null,
							null,
							'checkbox',
							null
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
							'My profetional skills',
							null,
							''
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
							''
						)
					}
				</p>
			</div>


			<div className={style.profileContacts}>
				<span className={style.boldSpan}>Contacts</span>: {Object.keys(profile.contacts).map(key => {
					return (
						<li key={key}>
							<span className={style.boldSpan}>{key}</span>:
							{
								createField(
									Input,
									'contacts.' + key,
									key,
									null,
									null,
								)
							}
						</li>
					)
				})}
			</div>
		</form>
	)
}

const ProfileDataReduxForm = reduxForm({ form: 'edit_Profile' })(ProfileDataForm)

export default ProfileDataReduxForm;