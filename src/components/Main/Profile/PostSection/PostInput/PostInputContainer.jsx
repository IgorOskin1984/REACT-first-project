import PostInput from "./PostInput";
import { addNewPostActionCreator } from "../../../../../redax/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onClickAddPost: (newPost) => {
			dispatch(addNewPostActionCreator(newPost));
		}
	}
}

const PostInputContainer = connect(mapStateToProps, mapDispatchToProps)(PostInput)

export default PostInputContainer;
