import React from "react";
import style from './PostSection.module.css';
import PostBodyContainer from "./PostBody/PostBodyContainer";
import PostInputContainer from "./PostInput/PostInputContainer";


const MyPostsContainer = (props) => {
	//console.log(props);

	return (
		<section>
			<PostInputContainer
			//store={props.store}
			/>
			<PostBodyContainer
				//store={props.store}
			/>
		</section>
	)
}

export default MyPostsContainer;

