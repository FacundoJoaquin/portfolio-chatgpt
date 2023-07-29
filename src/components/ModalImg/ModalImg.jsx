import React, { useState } from 'react';
import './ModalImg.css';
import avaibiliyty from '../../assets/vertis-avaibiliyty.jpeg';
import client from '../../assets/vertis-client.jpeg';
import clients from '../../assets/vertis-clients.jpeg';
import login from '../../assets/vertis-login.jpeg';
import nso from '../../assets/vertis-nso.jpeg';
import nso1 from '../../assets/vertis-nso1.jpeg';

const ModalImg = ({ closeModal }) => {
	const vertisImgs = [avaibiliyty, client, clients, login, nso, nso1];

	const [currentImg, setCurrentImg] = useState(0);

	const handleNextImg = () => {
		setCurrentImg(prevIndex => (prevIndex + 1) % vertisImgs.length);
	};
	const handlePrevImg = () => {
		setCurrentImg(prevIndex =>
			prevIndex === 0 ? vertisImgs.length - 1 : prevIndex - 1,
		);
	};

	return (
		<div className='m-img-container'>
			<div className='left-arrow'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-6 h-6'
					onClick={handlePrevImg}
				>
					<path
						fillRule='evenodd'
						d='M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z'
						clipRule='evenodd'
					/>
				</svg>
			</div>
			<div className='vertis-container'>
				<div className='modal-title'>
					<p>Vertis</p>
					<div onClick={closeModal} className='modal-close'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6'
						>
							<path
								fillRule='evenodd'
								d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
				</div>
				<div className='slider'>
					<img src={vertisImgs[currentImg]} alt='' />
				</div>
			</div>
			<div className='right-arrow' >
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					fill='currentColor'
					className='w-6 h-6'
					onClick={handleNextImg}
				>
					<path
						fillRule='evenodd'
						d='M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z'
						clipRule='evenodd'
					/>
				</svg>
			</div>
		</div>
	);
};

export default ModalImg;
