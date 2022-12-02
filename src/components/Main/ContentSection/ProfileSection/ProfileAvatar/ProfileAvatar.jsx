import React from "react";
import smile from '../../../../../img/smile.jpg';
import style from './ProfileAvatar.module.css';

const ProfileAvatar = () => {
	return (
		<div className={style.profile__avatar}>
			<img src={smile} alt="avatar" />
		</div>
	)
}
export default ProfileAvatar;