import React from "react";
import Post_item from './Post_Item/Post_item'
import PostBody from './PostBody'
import { connect } from "react-redux";



//const PostBodyContainer = (props) => {


//	return (
//		<StoreContext.Consumer>
//			{(store) => {
//				let postElementsCreater = store.getState().profilePage.postBodyData.map((data) => {
//					return (
//						<Post_item
//							postText={data.text}
//							postLike={data.postLikeCounter}
//							footerText={'it is posts footer'}
//						/>
//					)
//				})
//				return (
//					<PostBody postElementsCreater={postElementsCreater} />
//				)
//			}
//			}

//		</StoreContext.Consumer>
//	)
//}

let mapStateToProps = (state) => {
	return {
		state: state
	}
}
let mapDispatchToProps = () => {
	return {
	}
}


const PostBodyContainer = connect(mapStateToProps, mapDispatchToProps)(PostBody)

export default PostBodyContainer;