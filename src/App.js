import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { autoficationTC } from './redax/appReducer'
import { compose } from 'redux';
import { withRouter } from './components/Main/Profile/ProfileContainer';
import Preloader from './components/common/Preloader/Preloader';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from './redax/redux-store'



class App extends Component {
	//constructor(props) {
	//	super(props);
	//}

	catchAllUnhandledErrors = (reason, promice) => {
		alert('some error occured')
	}

	componentDidMount() {
		this.props.autoficationTC();
		window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
	}

	//подчищаем за собой мусор
	componentWillUnmount() {
		window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
	}

	render() {
		if (!this.props.initializedSuccess) {
			return <Preloader />
		}
		return (<div className='wrapper'>
			<HeaderContainer />
			<Main />
			<Footer />
		</div>);
	}

}

const mapStateToProps = (state) => {
	return {
		initializedSuccess: state.app.initializedSuccess
	}
}

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { autoficationTC })
)(App);


//========================================================================================================================================================

const MainApp = (props) => {
	return (
		//<React.StrictMode>
		//<BrowserRouter basename={process.env.PUBLIC_URL}>
		//! HashRouter нужен для githum pages
		<HashRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</HashRouter>
		//</BrowserRouter>
		//</React.StrictMode>
	)
}

export default MainApp
