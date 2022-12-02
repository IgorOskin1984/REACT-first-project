import React from "react";
import logo_01 from './../../../../img/01.jpg';
import style from './Wallpapers.module.css';

const Wallpapers = () => {
	return (
		<div className={style.wallpapers}>
			<img className='profile__img-img' src={logo_01}></img>
		</div>
	)
}

export default Wallpapers;
