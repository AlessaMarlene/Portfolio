import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Personalinfo from './Components/PersonalInfo/Personalinfo';
import './App.css';

function App() {
	return (
	<BrowserRouter>
		<div className="mainBackground">
			<Routes>
				<Route path='/' element={<Personalinfo/>}/>
				<Route path='/PersonalInfo' element={<Personalinfo/>}/>
				<Route path='*' element={<Personalinfo/>}/>
			</Routes>
		</div>
	</BrowserRouter>
	);
}

export default App;