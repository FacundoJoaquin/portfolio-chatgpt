import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FooterContainer from './containers/FooterContainer';
import MainContainer from './containers/MainContainer.jsx';
import AboutMeContainer from './containers/AboutMeContainer.jsx';
import ProyectsContainer from './containers/ProyectsContainer.jsx';
import StackContainer from './containers/StackContainer.jsx';
import ContactContainer from './containers/ContactContainer.jsx';
import { ItemsProvider, ItemsContext } from './context/Context'; // Importa el contexto y asegúrate de agregarlo aquí
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';

function App() {
	const [showSidebar, setShowSidebar] = useState(true);

	return (
		<ItemsProvider>
			<BrowserRouter>
				<div className='app'>
					<div className='navbar'>
						<Navbar />
					</div>
					<div className='app-sidebar'>
						<Sidebar showSidebar={showSidebar} />
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
		</ItemsProvider>
	);
}

export default App;
