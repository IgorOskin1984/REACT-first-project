import React, { Component } from "react";
import { connect } from "react-redux";
import style from './PostBody.module.css';
import Post_item from "./Post_Item/Post_item";


class PostBodyContainer extends Component {
	//constructor(props) {
	//	super(props);
	//}

	render() {
		let postElementsCreater = this.props.postBodyData.map(data => {
			return <Post_item
				postText={data.text}
				postLike={data.postLikeCounter}
				footerText={'it is posts footer'} />;
		});
		return (<div className={style.postBody}>
			{postElementsCreater}
		</div>);
	}

}

let mapStateToProps = (state) => {
	return {
		postBodyData: state.profilePage.postBodyData
	}
}

export default connect(mapStateToProps, null)(PostBodyContainer);