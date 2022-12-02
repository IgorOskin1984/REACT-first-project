import React from "react";
import style from './PostBody.module.css';

const PostBody = (props) => {
	return (
		<div className={style.postBody}>
			{props.postElementsCreater}
		</div>
	)
}
export default PostBody;