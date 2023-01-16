import { combineReducers, legacy_createStore as createStore } from "redux";
import profilePageReducer from './profileReducer';
import dialogsPageReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersPageReducer from "./usersReducer";


let reducers = combineReducers(
	{
		profilePage: profilePageReducer,
		dialogsPage: dialogsPageReducer,
		sidebar: sidebarReducer,
		usersPage: usersPageReducer
	})

let store = createStore(reducers);
window.store = store;

export default store;