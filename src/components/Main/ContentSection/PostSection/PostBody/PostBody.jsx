import React from "react";
import style from './PostBody.module.css';
import Post_item from "./Post_Item/Post_item";


const PostBody = (props) => {
	//console.log(props);
	let postElementsCreater = props.state.profilePage.postBodyData.map((data) => {
		return (
			<Post_item
				postText={data.text}
				postLike={data.postLikeCounter}
				footerText={'it is posts footer'}
			/>
		)
	})

	return (
		<div className={style.postBody}>
			{postElementsCreater}
		</div>
	)
}
export default PostBody;