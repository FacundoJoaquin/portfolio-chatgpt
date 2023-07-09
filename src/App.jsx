import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarContainer from './containers/SidebarContainer'
function App() {
	return (
		<BrowserRouter>
			<SidebarContainer />
		</BrowserRouter>
	);
}

export default App;
