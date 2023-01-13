import React from "react";
import style from './Main.module.css';
import Sidebar from "./Sidebar/Sidebar";
import ContentSection from "./ContentSection/ContentSection";
import DialogsConteiner from "./Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import UsersConteiner from "./Users/UsersConteiner";

const Main = (props) => {
	//console.log(props);
	//debugger

	return (
		<main className={style.main}>
			<Sidebar />
			<section>
				<Routes>
					<Route path="/"
						element={<ContentSection />}
					/>
					<Route path="/profile"
						element={<ContentSection />}
					/>
					<Route path="/dialogs/*"
						element={<DialogsConteiner />}
					/>
					<Route path="/news"
						element={<News />} />
					<Route path="/music"
						element={<Music />} />
					<Route path="/settings"
						element={<Settings />} />
					<Route path="/users"
						element={<UsersConteiner />} />
				</Routes>
			</section>
		</main>
	)
}

export default Main;
