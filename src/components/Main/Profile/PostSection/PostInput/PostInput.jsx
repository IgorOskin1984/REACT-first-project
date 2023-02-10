import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLenthCreater, required } from "../../../../../utils/validators/validators";
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

let maxLenth50 = maxLenthCreater(50)

const PostInputForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit} >
			<div>
				<Field
					component={Textarea}
					validate= {[required, maxLenth50]}
					name ={'postFormMessage'}
					className={style.input}
					onChange={props.onPostChange}
					//ref={newPostElement}
					value={props.newPostText}
					placeholder='whats new?'
				/>
			</div>
			<button onClick={props.onClickAddPost} className='button'>Send</button>
		</form>
	)
}

const ReduxPostInputForm = reduxForm({form: 'profilePostForm'})(PostInputForm);

const PostInput = (props) => {
	const onAddPost = (values) => {
		return props.onClickAddPost(values.postFormMessage)
	}
	return (
		<div className='body'>
			<h2 className={style.title}>My posts</h2>
			<ReduxPostInputForm onSubmit={onAddPost} />
		</div>
	)
}

export default PostInput;
