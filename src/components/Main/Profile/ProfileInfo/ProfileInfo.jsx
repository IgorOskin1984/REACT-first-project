import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../../common/Preloader/Preloader';
import userAvatar from './../../../../img/user_image_png.png'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';
import ProfileDataReduxForm from './ProfileDataForm';

const ProfileInfo = ({ profile, isOwner, ...props }) => {

	//console.log(props);

	const [editMode, setEditMode] = useState(false)

	const onGetPotoFile = (e) => {
		if (e.target.files.length) {
			props.updateUserPhotoTC(e.target.files[0])
		}
	}

	let onSubmit = (formData) => {
		props.setUserProfileTC(formData).then(
			() => {
				setEditMode(false);
			}
		)
	}

	if (!profile) {
		return <Preloader />
	}

	return (
		<div>
			<div className={style.content__profile}>
				<div className={style.profile__discription}>

					{
						isOwner &&
						<div className={style.profileAddPotoInputWrapper}>
							<input type="file" onChange={onGetPotoFile} />
						</div>
					}

					<div className={style.profile__avatar}>
						<img
							src={profile.photos.large || userAvatar}
							alt='logo' />
					</div>

					<div className={style.profile__textContent}>
						<h2 className={style.title}>My profile</h2>
						<div className='profile__info'>
							{editMode
								? <ProfileDataReduxForm
									initialValues={profile} //!начальные значения
									isOwner={isOwner}
									onSubmit={onSubmit}
									profile={profile}
								/>
								: <ProfileData
									profile={profile}
									status={props.status}
									isOwner={isOwner}
									autorizedUserId={props.autorizedUserId}
									updateUserStatusTC={props.updateUserStatusTC}
									chengeEditMode={() => { setEditMode(true) }} />
							}

						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

const ProfileData = ({ isOwner, profile, chengeEditMode, ...props }) => {
	return (
		<div>
			{isOwner &&
				<div>
					<p>
						<button onClick={chengeEditMode}>Edit profile</button>
					</p>
				</div>
			}
			<div>
				<p>
					<span className={style.boldSpan}>My name</span>: {profile.fullName}
				</p>
			</div>
			<div>
				<p>
					<span className={style.boldSpan}>Looking for a job</span>: {profile.lookingForAJob ? 'yes' : 'no'}
				</p>
			</div>
			{profile.lookingForAJob &&
				<div>
					<p>
						<span className={style.boldSpan}>My profetional skills</span>: {profile.lookingForAJobDescription}
					</p>
				</div>
			}
			<div>
				<p>
					<span className={style.boldSpan}>About me</span>: {profile.aboutMe}
				</p>
			</div>
			<div>
				<span className={style.boldSpan}>Contacts</span>: {Object.keys(profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
				})}
			</div>
			<ProfileStatusWithHooks
				currentUserPofileId={profile.userId}
				status={props.status}
				updateUserStatusTC={props.updateUserStatusTC}
				autorizedUserId={props.autorizedUserId}
			/>
		</div>
	)
}
const Contact = ({ contactTitle, contactValue }) => {
	return (
		<li>
			<span className={style.boldSpan}>{contactTitle}</span>: {contactValue}
		</li>
	)
}

export default ProfileInfo;

