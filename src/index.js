import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './index.css';

import store from './redax/redux-store';
import { Provider } from 'react-redux';
import MainApp from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));

	root.render(
		<MainApp/>
	);

reportWebVitals();
