import React from "react";
import style from './Main.module.css';
import Sidebar from "./Sidebar/Sidebar";
import ContentSection from "./ContentSection/ContentSection";
import Dialogs from "./Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import Friends from './Friends/Friends'

const Main = (props) => {


	return (
		<main className={style.main}>
			<Sidebar />
			<section>
				<Routes>
					<Route
						path="/" element={
							<ContentSection
								profilePage={props.state.profilePage}
								dispatch={props.dispatch}
							/>}
					/>
					<Route
						path="/profile" element={
							<ContentSection
								profilePage={props.state.profilePage}
								dispatch={props.dispatch}
							/>}
					/>

					<Route
						path="/dialogs/*" element={
							<Dialogs
								state={props.state.dialogsPage}
								dispatch={props.dispatch}
							/>} />
					<Route path="/news" element={
						<News />} />
					<Route path="/music" element={
						<Music />} />
					<Route path="/settings" element={
						<Settings />} />
					<Route path="/friends" element={
						<Friends />} />
				</Routes>
			</section>
		</main>
	)
}

export default Main;
