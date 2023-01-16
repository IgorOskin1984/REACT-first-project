import React from 'react';
import style from './ProfileInfo.module.css';
import logo_01 from './../../../../img/01.jpg';
import smile from './../../../../img/smile.jpg'
import Preloader from '../../../common/Preloader/Preloader';


export const ProfileInfo = (props) => {
	//console.log(props);

	if (!props.profile) {
		return <Preloader/>
	}


	return <>
		<div className={style.wallpapers}>
			<img className='profile__img-img' src={logo_01}></img>
		</div>

		{/*<section className={style.content} >*/}
		<div className={style.content__profile}>
			<div className={style.profile__discription}>

				<div className={style.profile__avatar}>
					<img src={props.profile.photos.large} alt="avatar" />
				</div>

				<div className='profile__text-content'>
					<h2 className='profile__title'>My name</h2>
					<div className='profile__info'>
						<p>{props.profile.fullName}</p>
						<p>{props.profile.aboutMe}</p>
						<p>about me</p>
						<p>about me</p>
					</div>
				</div>

			</div>
		</div>
	</>
}

