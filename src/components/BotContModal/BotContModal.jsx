import React, { useState } from 'react';
import './BotContModal.css';
import Square from '../Square/Square';
import Modal from '../Modal/Modal';
const BottomContainer = () => {
	const [showModal, setShowModal] = useState(false);

	const handleModal = () => {
		setShowModal(!showModal);
		console.log(showModal);
	};

	return (
		<div className='btm'>
			<div className='btm-container'>
				<div onClick={handleModal} className='btm-txt'>
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
							d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
						/>
					</svg>

					<p>Upgrade my Portfolio</p>
					<p className='new'>NEW</p>
				</div>
			</div>
			<div className='btm-square'>
				<Square children={'U'} />

				<p>User Guest</p>
			</div>
			{showModal && (
				<div className='modal'>
					<Modal showModal={showModal} setShowModal={setShowModal}></Modal>
				</div>
			)}
		</div>

	);
};

export default BottomContainer;
