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
import { BrowserRouter } from 'react-router-dom';
import store from './redax/redux-store'



class App extends Component {
	//constructor(props) {
	//	super(props);
	//}

	componentDidMount() {
		this.props.autoficationTC()
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

const MainApp = (props) => {
	return (
	//<React.StrictMode>
	<BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
	//</React.StrictMode>
	)
}

export default MainApp
