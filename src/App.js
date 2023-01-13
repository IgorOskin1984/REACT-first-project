import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';



const App = (props) => {
	//console.log(props);

	return (
		<div className='wrapper'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}


export default App;
