import React from "react";
import PostInput from "./PostInput";
import { addNewPostActionCreator, apdateNewPostTextActionCreator } from "../../../../../redax/profileReducer";
import { connect } from "react-redux";

//const PostInputContainer = (props) => {
//	//console.log(props);


//	//let newPostElement = React.createRef();



//	return (
//		<StoreContext.Consumer>
//			{(store) => {
//				let onClickAddPost = () => {
//					store.dispatch(addNewPostActionCreator());
//				}

//				let onPostChange = (event) => {
//					let text = event.target.value;
//					store.dispatch(apdateNewPostTextActionCreator(text));
//				}
//				return (
//					<PostInput
//						onPostChange={onPostChange}
//						onClickAddPost={onClickAddPost}
//						newPostText={store.getState().profilePage.newPostText}
//					/>
//				)
//			}
//			}

//		</StoreContext.Consumer>
//	)
//}

let mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onPostChange: (event) => {
			let text = event.target.value;
			dispatch(apdateNewPostTextActionCreator(text));
		},
		onClickAddPost: () => {
			dispatch(addNewPostActionCreator());
		}
	}
}

const PostInputContainer = connect(mapStateToProps, mapDispatchToProps)(PostInput)

export default PostInputContainer;
