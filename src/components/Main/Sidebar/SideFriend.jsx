import React from "react";
import smile from '../../../img/smile.jpg';
import style from './SideFriend.module.css'


const SideFriend = () => {
	return (
		<div className={style.friendContainer}>
			<div className={style.friendImgContainer}>
				<img src={smile} alt="avatar-image" />
			</div>
			<div className={style.FriendName}>Friends name</div>

		</div>
	)
}
export default SideFriend;