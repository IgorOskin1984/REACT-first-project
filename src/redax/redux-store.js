import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profilePageReducer from './profileReducer';
import dialogsPageReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersPageReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';



let reducers = combineReducers(
	{
		profilePage: profilePageReducer,
		dialogsPage: dialogsPageReducer,
		sidebar: sidebarReducer,
		usersPage: usersPageReducer,
		auth: authReducer,
		form: formReducer
	})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
//src/redax/redux-store.js