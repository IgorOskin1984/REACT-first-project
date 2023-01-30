import React from "react";
import style from './Main.module.css';
import Sidebar from "./Sidebar/Sidebar";
import Profile from "./Profile/Profile";
import DialogsConteiner from "./Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import UsersConteiner from "./Users/UsersContainer";
import ProfileContainer from './Profile/ProfileContainer'
import LoginPage from "../LoginPage/LoginPage";

const Main = (props) => {
	//console.log(props);
	//debugger

	return (
		<main className={style.main}>
			<Sidebar />
			<section>
				<Routes>
					<Route path="/"
						element={<ProfileContainer />}/>
					<Route path="/profile/*"
						element={<ProfileContainer />}/>
					<Route path="/profile/:userId"
						element={<ProfileContainer />}/>
					<Route path="/dialogs/*"
						element={<DialogsConteiner />}/>
					<Route path="/news"
						element={<News />} />
					<Route path="/music"
						element={<Music />} />
					<Route path="/settings"
						element={<Settings />} />
					<Route path="/users"
						element={<UsersConteiner />} />
					<Route path="/login"
						element={<LoginPage />} />
				</Routes>
			</section>
		</main>
	)
}

export default Main;
