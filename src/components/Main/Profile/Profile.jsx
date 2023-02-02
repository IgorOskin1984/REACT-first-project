import React from "react";
import style from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./PostSection/MyPostsContainer";
import { Navigate } from "react-router-dom";

const Profile = (props) => {
	return (
		<section className={style.contentBody}>
			<ProfileInfo profile = {props.profile}
			//
			status = {props.status}
			updateUserStatusTC = {props.updateUserStatusTC}
			userPofileId = {props.userPofileId}
			//
			/>
			<MyPostsContainer />
		</section>

	)
}
export default Profile;
