import React from 'react';
import './Sidebar.css';
import ButtonChat from '../ButtonChat/ButtonChat';
import HistorialContainer from '../HistorialContainer/HistorialContainer';
import BottomContainer from '../BottomContainer/BottomContainer';
const Sidebar = () => {
	const headers = [
		'¿Quien es Facundo Joaquin?',
		'¿Que proyectos realizó?',
		'Certificaciones obtenidas',
		'Stack tecnologico',
		'¿Cómo contactarlo?',
	];

	return (
		<div className='main-side-container'>
			<ButtonChat />
			<HistorialContainer headers={headers}/>
			<BottomContainer />
		</div>
	);
};

export default Sidebar;
