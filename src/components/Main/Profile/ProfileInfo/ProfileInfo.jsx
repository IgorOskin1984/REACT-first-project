import React from 'react';
import style from './ProfileInfo.module.css';
import wallpapers from './../../../../img/01.jpg';
import Preloader from '../../../common/Preloader/Preloader';
import userAvatar from './../../../../img/user_image_png.png'
import { ProfileStatusWithHooks } from './ProfileStatusWithHooks';


export const ProfileInfo = ({ profile, status, autorizedUserId, updateUserStatusTC, updateUserPhotoTC }) => {

	//console.log(props);

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
					<h2 className='profile__title'>My name</h2>
					<div className='profile__info'>
						<p>{profile.fullName}</p>
						<p>{profile.aboutMe}</p>
						<p>about me</p>
						<p>about me</p>
					</div>
				</div>

				<ProfileStatusWithHooks
					//status = 'hello'
					//
					status={status}
					updateUserStatusTC={updateUserStatusTC}
					currentUserPofileId={profile.userId}
					autorizedUserId={autorizedUserId}
				/>

				<div className={style.addPhotoWrapper}>
					<input type="file" onChange={onGetPotoFile} />
				</div>
			</div>
		</div>
	</>
}

