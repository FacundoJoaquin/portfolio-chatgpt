import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import ButtonChat from '../ButtonChat/ButtonChat';
import HistorialContainer from '../HistorialContainer/HistorialContainer';
import BottomContainer from '../BottomContainer/BottomContainer';
import CloseSideBar from '../CloseSideBar/CloseSideBar';
import OpenSidebar from '../OpenSidebar/OpenSidebar';

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

	useEffect(() => {
		const handleWindowResize = () => {
		  if (window.innerWidth <= 760) {
			setShowSideBar(false);
		  } else {
			setShowSideBar(true);
		  }
		};
			window.addEventListener('resize', handleWindowResize);
			return () => {
		  window.removeEventListener('resize', handleWindowResize);
		};
	  }, []);

	return (
		<>
			{showSidebar ? (
				<div className={`main-side-container ${showSidebar ? '' : 'hidden'}`}>
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
					<OpenSidebar handleSideBar={handleSideBar} />
				</div>
			)}
		</>
	);
};

export default Sidebar;
