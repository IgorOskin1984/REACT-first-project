import React from "react";
import style from './ContentSection.module.css';

import Wallpapers from "./Wallpapers/Wallpapers";
import ProfileSection from "./ProfileSection/ProfileSection";
import PostSection from "./PostSection/PostSection";

const ContentSection = (props) => {
	//console.log(props);
	return (
		<section className={style.contentBody}>
			<Wallpapers />

			<section className={style.content} >
				<ProfileSection />

				<PostSection
					//store={props.store}
				/>
			</section>
		</section>
	)
}
export default ContentSection;
