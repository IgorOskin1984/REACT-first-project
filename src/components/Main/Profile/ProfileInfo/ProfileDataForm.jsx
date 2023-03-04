import React from "react"
import { reduxForm } from "redux-form"
import { createField, Input, Textarea } from "../../../common/FormsControls/FormsControls"
import style from './ProfileInfo.module.css'

const ProfileDataForm = ({ handleSubmit, error, profile }) => {
	return (
		<form onSubmit={handleSubmit}>

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

			{/*
			<div>
				<span className={style.boldSpan}>Contacts</span>: {Object.keys(profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
				})}
			</div>
			<ProfileStatusWithHooks
				//status = 'hello'
				//
				status={status}
				updateUserStatusTC={updateUserStatusTC}
				currentUserPofileId={profile.userId}
				autorizedUserId={autorizedUserId}
			/>*/}
		</form>
	)
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;