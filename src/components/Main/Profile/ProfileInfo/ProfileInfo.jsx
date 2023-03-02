import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import wallpapers from './../../../../img/01.jpg';
import Preloader from '../../../common/Preloader/Preloader';
import userAvatar from './../../../../img/user_image_png.png'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, autorizedUserId, isOwner, updateUserStatusTC, updateUserPhotoTC }) => {

	//console.log(props);

	const [editMode, setEditMode] = useState(false)

	const onGetPotoFile = (e) => {
		if (e.target.files.length) {
			updateUserPhotoTC(e.target.files[0])
		}
	}

	if (!profile) {
		return <Preloader />
	}

	return <>
		<div className={style.wallpapers}>
			<img className='profile__img-img' src={wallpapers}></img>
		</div>

		{/*<section className={style.content} >*/}
		<div className={style.content__profile}>
			<div className={style.profile__discription}>

				<div className={style.profile__avatar}>
					<img
						src={profile.photos.large || userAvatar}
						alt='logo' />
				</div>


				<div className='profile__text-content'>
					<h2 className='profile__title'>My profile</h2>
					<div className='profile__info'>

						{editMode
							? <ProfileDataForm profile={profile} />
							: <ProfileData profile={profile} isOwner={isOwner} chengeEditMode={() => { setEditMode(true) }} />}



						<ProfileStatusWithHooks
							//status = 'hello'
							//
							status={status}
							updateUserStatusTC={updateUserStatusTC}
							currentUserPofileId={profile.userId}
							autorizedUserId={autorizedUserId}
						/>
					</div>
				</div>

				{
					isOwner &&
					<div className={style.profileAddPotoInputWrapper}>
						<input type="file" onChange={onGetPotoFile} />
					</div>
				}
			</div>
		</div>
	</>
}

const ProfileData = ({ profile, isOwner, chengeEditMode }) => {
	console.log(isOwner);
	return (
		<div>
			{isOwner &&
				<div>
					<button onClick={chengeEditMode}>Edit button</button>
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
		</div>
	)
}
const ProfileDataForm = ({ profile }) => {
	return (
		<div>
			form
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

