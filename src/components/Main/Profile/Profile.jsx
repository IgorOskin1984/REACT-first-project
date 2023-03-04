import React from "react";
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostInputContainer from "./PostSection/PostInput/PostInputContainer";
import PostBodyContainer from "./PostSection/PostBody/PostBodyContainer";
import wallpapers from './../../../img/01.jpg';

//!наверно надо сделать Navigate

const Profile = ({ profile, status, autorizedUserId, isOwner,
	updateUserStatusTC, updateUserPhotoTC, setUserProfileTC }) => {

	return (
		<section className={style.wrapper} >
			<div className={style.wallpapers}>
				<img className='profile__img-img' src={wallpapers}></img>
			</div>
			<div className={style.contentBody}>
				<ProfileInfo
					isOwner={isOwner}
					profile={profile}
					status={status}
					autorizedUserId={autorizedUserId}
					updateUserStatusTC={updateUserStatusTC}
					updateUserPhotoTC={updateUserPhotoTC}
					setUserProfileTC={setUserProfileTC}
				/>
				<div>
					<PostInputContainer />
					<PostBodyContainer />
				</div>
			</div>
		</section>
	)
}
export default Profile;
