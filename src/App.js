import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Personalinfo from './Components/PersonalInfo/Personalinfo';
import Projects from './Components/Projects/Projects';
import './App.css';

function App() {
	return (
	<BrowserRouter>
		<div className="mainBackground">
			<Routes>
				<Route path='/' element={<Personalinfo/>}/>
				<Route path='/personalInfo' element={<Personalinfo/>}/>
				<Route path='/projects' element={<Projects/>}/>
				<Route path='*' element={<Personalinfo/>}/>
			</Routes>
		</div>
	</BrowserRouter>
	);
}

export default App;