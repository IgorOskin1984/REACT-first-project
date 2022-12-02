import React from "react";
import style from './PostSection.module.css';
import PostBody from "./PostBody/PostBody";
import PostInput from "./PostInput/PostInput";
import Post_item from "./PostBody/Post_Item/Post_item";

const PostSection = (props) => {
	//console.log(props);

	let postElementsCreater = props.profilePage.postBodyData.map((data) => {
		return (
			<Post_item
				postText={data.text}
				postLike={data.postLikeCounter}
				footerText={'it is posts footer'}
			/>
		)
	})
	return (
		<section>
			<PostInput
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch}
			/>
			<PostBody postElementsCreater={postElementsCreater} />
		</section>
	)
}

export default PostSection;

