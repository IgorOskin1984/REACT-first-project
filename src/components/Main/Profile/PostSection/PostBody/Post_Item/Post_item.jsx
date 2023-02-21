import React from "react";
import style from './Post_Item.module.css'

const Post_item = ({postText, postLike, footerText}) => {
	return (
		<div className={style.item}>
			<div className={style.item_content}>
				<div className={style.imgBox}>
					<img src="https://lumiere-a.akamaihd.net/v1/images/p_avatar_de27b20f.jpeg" alt="" />
				</div>
				<p>{postText}</p>
				<p>{postLike} likes</p>
			</div>
			<p className={style.itemFooter}>{footerText}</p>
		</div>
	)
}
export default Post_item;