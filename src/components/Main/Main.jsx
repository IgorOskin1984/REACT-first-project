import React, { Suspense } from "react";
import style from './Main.module.css';
import Sidebar from "./Sidebar/Sidebar";
import DialogsConteiner from "./Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import UsersConteiner from "./Users/UsersContainer";
import LoginPage from "../LoginPage/LoginPage";
import withSuspense from "../../hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
//import  from './Profile/ProfileContainer'

const Main = (props) => {
	//console.log(props);
	//debugger

	return (
		<main className={style.main}>
			<Sidebar />
			<section>
				<Routes>
					<Route path="/"
						element={
							<Suspense fallback={<div>Загрузка...</div>}>
								<ProfileContainer />
							</Suspense>
						} />
					<Route path="/profile/*"
						element={
							<Suspense fallback={<div>Загрузка...</div>}>
								<ProfileContainer />
							</Suspense>
						} />
					<Route path="/profile/:userId"
						element={
							<Suspense fallback={<div>Загрузка...</div>}>
								<ProfileContainer />
							</Suspense>
						} />
					<Route path="/dialogs/*"
						element={<DialogsConteiner />} />
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
