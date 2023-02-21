import React from "react";
import style from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Navigate } from "react-router-dom";
import PostInputContainer from "./PostSection/PostInput/PostInputContainer";
import PostBodyContainer from "./PostSection/PostBody/PostBodyContainer";

//!наверно надо сделать Navigate

const Profile = ({profile, status, updateUserStatusTC, autorizedUserId}) => {

	return (
		<section className={style.contentBody}>
			<ProfileInfo
				profile={profile}
				status={status}
				updateUserStatusTC={updateUserStatusTC}
				autorizedUserId={autorizedUserId}
			/>
			<div>
				<PostInputContainer />
				<PostBodyContainer />
			</div>
		</section>

	)
}
export default Profile;
