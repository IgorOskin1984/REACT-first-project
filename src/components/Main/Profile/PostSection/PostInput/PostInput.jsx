import React from "react";
import style from './PostInput.module.css';

const PostInput = (props) => {
	//console.log(props);

	return (
		<div className='body'>
			<h2 className={style.title}>My posts</h2>
			<input
				className={style.input}
				onChange={props.onPostChange}
				//ref={newPostElement}
				value={props.newPostText}
				placeholder='whats new?'
			></input>
			<button onClick={props.onClickAddPost} className='button'>Send</button>
		</div>
	)
}

export default PostInput;
