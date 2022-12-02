import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import store from './redax/redux-stor';





const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					dispatch={store.dispatch.bind(store)} />
			</BrowserRouter>
		</React.StrictMode>
	);
}



rerenderEntireTree(store.getState());

store.subscribe( () => {
rerenderEntireTree(store.getState())
})
//этот вариант почему-то не работает??
//store.subscribe(rerenderEntireTree(store.getState()))

reportWebVitals();
