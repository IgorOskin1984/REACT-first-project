import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Component } from 'react';
import { connect } from 'react-redux';
import {autoficationTC} from './redax/appReducer'
import { compose } from 'redux';
import { withAuthRedirect } from './hoc/withAuthRedirectNavigate';
import { withRouter } from './components/Main/Profile/ProfileContainer';



class App extends Component {
	//constructor(props) {
	//	super(props);
	//}

	componentDidMount() {
		this.props.autoficationTC()
	}

	render() {
		return (<div className='wrapper'>
			<HeaderContainer />
			<Main />
			<Footer />
		</div>);
	}

}

const mapStateToProps = (state) => {
	//initializedSuccess: state.app.initializedSuccess
}

export default compose(
	//withAuthRedirect,
	withRouter,
	connect(mapStateToProps, {autoficationTC})
)(App);
