import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore } from "redux";
import profilePageReducer from './profileReducer';
import dialogsPageReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersPageReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from "./appReducer";



let reducers = combineReducers(
	{
		profilePage: profilePageReducer,
		dialogsPage: dialogsPageReducer,
		sidebar: sidebarReducer,
		usersPage: usersPageReducer,
		auth: authReducer,
		form: formReducer,
		app: appReducer

	})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//redux-store без расширения в chrome
window.__store__ = store;

export default store;
//src/redax/redux-store.js