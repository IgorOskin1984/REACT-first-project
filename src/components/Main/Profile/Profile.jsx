import React from "react";
import style from './Profile.module.css';
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./PostSection/MyPostsContainer";

const Profile = (props) => {
	//debugger
	return (
		<section className={style.contentBody}>
			<ProfileInfo profile = {props.profile} />
			<MyPostsContainer />
		</section>

	)
}
export default Profile;
