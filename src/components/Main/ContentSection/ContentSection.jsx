import React from "react";
import style from './ContentSection.module.css';

import Wallpapers from "./Wallpapers/Wallpapers";
import ProfileSection from "./ProfileSection/ProfileSection";
import PostSection from "./PostSection/PostSection";

const ContentSection = (props) => {
	return (
		<section className={style.contentBody}>
			<Wallpapers />

			<section className={style.content} >
				<ProfileSection />

				<PostSection
					profilePage={props.profilePage}
					dispatch={props.dispatch}/>
			</section>
		</section>
	)
}
export default ContentSection;
