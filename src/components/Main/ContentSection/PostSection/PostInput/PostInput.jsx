import React from "react";
import style from './PostInput.module.css';
import { addNewPostActionCreator, apdateNewPostTextActionCreator } from "../../../../../redax/profileReducer";

const PostInput = (props) => {

	//console.log(props);

	//let newPostElement = React.createRef();

	let addPostLocal = () => {
		props.dispatch(addNewPostActionCreator());
	}

	let onPostChange = (event) => {
		let text = event.target.value;
		props.dispatch(apdateNewPostTextActionCreator(text));
	}

	return (
		<div className='body'>
			<h2 className={style.title}>My posts</h2>
			<input
				className={style.input}
				onChange={onPostChange}
				//ref={newPostElement}
				value={props.newPostText}
				placeholder='whats new?'
			></input>
			<button onClick={addPostLocal} className='button'>Send</button>
		</div>
	)
}

export default PostInput;
