import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SidebarContainer from './containers/SidebarContainer';
import FooterContainer from './containers/FooterContainer';
import MainContainer from './containers/MainContainer.jsx';
import AboutMeContainer from './containers/AboutMeContainer.jsx';
import ProyectsContainer from './containers/ProyectsContainer.jsx';
import StackContainer from './containers/StackContainer.jsx';
import ContactContainer from './containers/ContactContainer.jsx';

function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<div className='app-sidebar'>
					<SidebarContainer />
				</div>
				<div className='app-center'>
					<div className='app-main'>
						<Routes>
							<Route path='/' element={<MainContainer />} />
							<Route path='/facundo' element={<AboutMeContainer />} />
							<Route path='/proyects' element={<ProyectsContainer />} />
							<Route path='/stack' element={<StackContainer />} />
							<Route path='/contact' element={<ContactContainer />} />
							<Route path='*' element={<MainContainer />} />
						</Routes>
					</div>
					<div className='app-footer'>
						<FooterContainer />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
