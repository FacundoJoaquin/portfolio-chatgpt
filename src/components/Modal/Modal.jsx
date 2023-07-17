import React, { useState } from 'react';
import './Modal.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const Modal = ({ showModal, setShowModal }) => {
	const closeModal = () => {
		setShowModal(false);
	};

	const initialState = {
		feedback: '',
	};

	const [value, setValue] = useState(initialState);

	const handleFeedback = e => {
		const { name, value } = e.target;
		setValue({ ...value, [name]: value });
	};

	const onSubmit = async e => {
		e.preventDefault();

		const docRef = await addDoc(collection(db, 'feedback'), {
			value: value.feedback,
		});
		setValue({ ...value, feedback: '' });
		closeModal();
	};

	return (
		<div className='modal-container'>
			<div className='modal-title'>
				<p>Feedback</p>
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
			<div className='modal-txt'>
				<div className='modal-l'>
					<p>
						Primero que nada, muchas gracias por tomarte el tiempo de ver mi
						portfolio, realmente valoraría mucho que me dejes un feedback para
						mejorar, es totalmente anónimo y opcional. <br />
						<strong>Y de nuevo, ¡muchas gracias!</strong>
					</p>
				</div>
				<div className='modal-r'>
					<form action='' onSubmit={onSubmit}>
						<textarea
							onChange={handleFeedback}
							name='feedback'
							id=''
							cols='20'
							rows='5'
						></textarea>
						<button type='submit'>Send</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Modal;
