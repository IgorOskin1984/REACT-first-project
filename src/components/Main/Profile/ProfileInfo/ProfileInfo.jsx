import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import wallpapers from './../../../../img/01.jpg';
import Preloader from '../../../common/Preloader/Preloader';
import userAvatar from './../../../../img/user_image_png.png'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';


const ProfileInfo = ({ profile, status, autorizedUserId, isOwner, updateUserStatusTC, updateUserPhotoTC }) => {

	const onGetPotoFile = (e) => {
		if (e.target.files.length) {
			updateUserPhotoTC(e.target.files[0])
		}
	}

	const [editMode, setEditMode] = useState(false);
	const oneditModeChange = () => {
		return setEditMode(true)

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

				{
					isOwner &&
					<div className={style.profileAddPotoInputWrapper}>
						<input type="file" onChange={onGetPotoFile} />
					</div>
				}

				{isOwner &&
					<div>
						<button onClick={oneditModeChange} >Edit profile</button>
					</div>}

				<div className={style.profile__avatar}>
					<img
						src={profile.photos.large || userAvatar}
						alt='logo' />
				</div>


				<div className={style.profile__textContent}>
					<h2 className='profile__title'>My profile</h2>
					<div className='profile__info'>
						{editMode
							? <ProfileInfoData profile={profile} />
							: <ProfileInfoFormData profile={profile} />
						}

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
			</div>
		</div>
	</>
}

const ProfileInfoData = ({ profile }) => {
	return (
		<div>
			<div>
				<p>
					<span className={style.boldSpan}>LookingForAJob</span >: {profile.lookingForAJob ? 'yes' : 'no'}
				</p>
			</div>

			{!profile.lookingForAJob &&
				<div>
					<p>
						<span className={style.boldSpan}>What Im looking for</span >: {profile.lookingForAJobDescription || 'blablabnla'}
					</p>
				</div>
			}

			<div>
				<p>
					<span className={style.boldSpan}>Nickname</span >: {profile.fullName}
				</p>
			</div>

			<div>
				<p>
					<span className={style.boldSpan}>Contacts</span >: {Object.keys(profile.contacts).map(key => {
						return (
							<Contact key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />
						)
					})}
				</p>
			</div>

		</div>
	)
}
const ProfileInfoFormData = (props) => {
	return <div>
		forma
	</div>
}

const Contact = ({ contactsTitle, contactsValue }) => {
	return (
		<li>
			<span className={style.boldSpan}>{contactsTitle}</span >: {contactsValue || contactsTitle}
		</li>
	)
}

export default ProfileInfo;

