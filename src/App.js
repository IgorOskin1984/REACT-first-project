import './App.css';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import { Component } from 'react';
import { connect } from 'react-redux';
import {setInitialSuccessTC} from './redax/appReducer'
import Preloader from './components/common/Preloader/Preloader';



class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.setInitialSuccessTC()
	}

	render() {

		if(!this.props.autorizedSuccess) {
			return <Preloader/>
		}

		return (<div className='wrapper'>
			<HeaderContainer />
			<Main />
			<Footer />
		</div>);
	}

}

const mapStateToProps = (state) => ({
	autorizedSuccess: state.app.initialedSuccess
})

export default connect(mapStateToProps, {setInitialSuccessTC}) (App);
