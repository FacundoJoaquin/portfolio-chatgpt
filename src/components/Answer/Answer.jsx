import React from 'react';
import Square from '../Square/Square';
import './Answer.css'

const Answer = ({ children }) => {
	return (
		<div className='answer'>
			<Square children={'F'} />
			<div className='answ-txt'>
				{children}
			</div>
		</div>
	);
};

export default Answer;

