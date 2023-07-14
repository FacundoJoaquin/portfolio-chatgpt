import React, { useState } from 'react';
import './Sidebar.css';
import ButtonChat from '../ButtonChat/ButtonChat';
import HistorialContainer from '../HistorialContainer/HistorialContainer';
import BottomContainer from '../BottomContainer/BottomContainer';
import CloseSideBar from '../CloseSideBar/CloseSideBar';

const Sidebar = () => {
	const headers = [
		{ name: '¿Quien es Facundo Joaquin?', link: 'facundo' },
		{ name: '¿Que proyectos realizó?', link: 'proyects' },
		{ name: 'Stack tecnologico', link: 'stack' },
		{ name: '¿Cómo contactarlo?', link: 'contact' },
	];

	const [showSidebar, setShowSideBar] = useState(true);
	const handleSideBar = () => {
		setShowSideBar(!showSidebar);
	};

	return (
		<>
			{showSidebar ? (
				<div className='main-side-container'>
					<div>
						<div className='top-main'>
							<div className='top-main-1'>
								<ButtonChat />
							</div>
							<div className='top-main-2'>
								<CloseSideBar handleSideBar={handleSideBar} />
							</div>
						</div>
						<HistorialContainer headers={headers} />
					</div>
					<div className='side-bottom'>
						<BottomContainer />
					</div>
				</div>
			) : (
				<div className='hidden'>
					<CloseSideBar handleSideBar={handleSideBar} />
				</div>
			)}
		</>
	);
};

export default Sidebar;
