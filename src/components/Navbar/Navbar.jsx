import React, { useState } from 'react';
import './navbar.css';
import ModalHistorial from '../ModalHistorial/ModalHistorial';

const Navbar = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const handleModal = () => {
		setModalOpen(!modalOpen);
	};
	return (
		<div className='asd'>
			{modalOpen && <ModalHistorial onClose={handleModal} />}

			<div className='nav' onClick={handleModal}>
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
						d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Navbar;
