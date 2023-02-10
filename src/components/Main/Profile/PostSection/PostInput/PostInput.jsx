import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreater, required } from "../../../../../utils/validators/validators";
import { Textarea } from "../../../../common/FormsControls/FormsControls";
import style from './PostInput.module.css';

const maxLength5 = maxLengthCreater(2)

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea}
					validate={[required, maxLength5]}
					name='profilePageForm'
					type="text"
					placeholder='whats new?'
					value={props.newPostText}
					className={style.input}
				/>
			</div>
			<div>
				<button className={style.button}>Add post</button>
			</div>
		</form>
	)
}
const ProfilePageFormRedux = reduxForm({ form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const PostInput = (props) => {
	//console.log(props);
	let onAddNewPost = (values) => {
		props.onClickAddPost(values.profilePageForm)
	}

	return (
		<div className='body'>
			<h2 className={style.title}>My posts</h2>
			<ProfilePageFormRedux onSubmit={onAddNewPost} />
		</div>
	)
}

export default PostInput;
