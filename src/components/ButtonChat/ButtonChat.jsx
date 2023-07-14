import React from 'react';
import './ButtonChat.css';
import CloseSideBar from '../CloseSideBar/CloseSideBar';

const ButtonChat = ({ handleSideBar }) => {
	const handleButtonClick = () => {
		window.location.href = 'mailto:facundojoaquinn@gmail.com';
	};

	return (
		<div>
			<div className='btn-container'>
				<div className='new-chat-btn' onClick={handleButtonClick}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2}
						stroke='currentColor'
						className='w-6 h-6 plus'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 4.5v15m7.5-7.5h-15'
						/>
					</svg>
					<p className='new-chat-txt'>New chat</p>
				</div>
			</div>
		</div>
	);
};

export default ButtonChat;
