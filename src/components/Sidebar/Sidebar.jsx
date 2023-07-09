import React from 'react';
import './Sidebar.css';
import ButtonChat from '../ButtonChat/ButtonChat';
import HistorialContainer from '../HistorialContainer/HistorialContainer';
import BottomContainer from '../BottomContainer/BottomContainer';

const Sidebar = () => {
	const headers = [
		{ name: '¿Quien es Facundo Joaquin?', link: 'facundo' },
		{ name: '¿Que proyectos realizó?', link: 'proyectos' },
		{ name: 'Certificaciones obtenidas', link: 'certificaciones' },
		{ name: 'Stack tecnologico', link: 'stack' },
		{ name: '¿Cómo contactarlo?', link: 'contacto' },
	];

	return (
		<div className='main-side-container'>
			<ButtonChat />
			<HistorialContainer headers={headers} />
			<BottomContainer />
		</div>
	);
};

export default Sidebar;
