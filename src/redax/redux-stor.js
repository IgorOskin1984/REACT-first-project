import { combineReducers, legacy_createStore as createStore } from "redux";
import profilePageReducer from './profileReducer' ;
import dialogsPageReducer from './dialogsReducer' ;
import sidebarReducer from './sidebarReducer' ;


let reducers = combineReducers({
	profilePage: profilePageReducer,
	dialogsPage: dialogsPageReducer,
	sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store;