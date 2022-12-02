import React from "react";
import style from './ProfileSection.module.css';
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileDiscription from "./ProfileDiscription/ProfileDiscription";

const ProfileSection = () => {
	return (

		<div className='content__profile profile'>
			<div className={style.profile__discription}>

				<ProfileAvatar />

				<ProfileDiscription/>

			</div>
		</div>

	)
}
export default ProfileSection;