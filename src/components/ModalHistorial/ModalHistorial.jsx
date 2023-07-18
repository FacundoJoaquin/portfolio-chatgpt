import React from 'react';
import './ModalHistorial.css';
import { Link } from 'react-router-dom';
import ButtonChat from '../ButtonChat/ButtonChat';
import HistorialContainer from '../HistorialContainer/HistorialContainer';
import BotContModal from '../BotContModal/BotContModal';

const ModalHistorial = ({onClose}) => {
	const headers = [
		{ name: '¿Quien es Facundo Joaquin?', link: 'facundo' },
		{ name: '¿Que proyectos realizó?', link: 'proyects' },
		{ name: 'Stack tecnologico', link: 'stack' },
		{ name: '¿Cómo contactarlo?', link: 'contact' },
	];

	return (
		<div className='modal-h-container'>
			<div className='btm-close' onClick={onClose}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</div>
			<div className='modal-historial'>
				<div className='btc-modal'>
					<ButtonChat />
					<HistorialContainer headers={headers} />
				</div>
				<BotContModal />
			</div>
		</div>
	);
};

export default ModalHistorial;
