import React from "react";
import style from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Navigate } from "react-router-dom";
import PostInputContainer from "./PostSection/PostInput/PostInputContainer";
import PostBodyContainer from "./PostSection/PostBody/PostBodyContainer";

//!наверно надо сделать Navigate

const Profile = (props) => {
	//console.log(props);
	return (
		<section className={style.contentBody}>
			<ProfileInfo
				profile={props.profile}
				status={props.status}
				updateUserStatusTC={props.updateUserStatusTC}
				autorizedUserId={props.autorizedUserId}
			/>
			<div>
				<PostInputContainer />
				<PostBodyContainer />
			</div>
		</section>

	)
}
export default Profile;
