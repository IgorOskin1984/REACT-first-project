import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Component } from 'react';
import { connect } from 'react-redux';
import { autoficationTC } from './redax/appReducer'
import { compose } from 'redux';
import { withRouter } from './components/Main/Profile/ProfileContainer';
import Preloader from './components/common/Preloader/Preloader';



class App extends Component {
	//constructor(props) {
	//	super(props);
	//}

	componentDidMount() {
		this.props.autoficationTC()
	}

	render() {
		if (!this.props.initializedSuccess) {
			return <Preloader/>
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

export default compose(
	withRouter,
	connect(mapStateToProps, { autoficationTC })
)(App);
