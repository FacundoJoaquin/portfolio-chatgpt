import React from 'react';
import Square from '../Square/Square';
import './Question.css'

const Question = ({ children }) => {
	return (
		<div className='question'>
			<Square />
			<div className='qst-txt'>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default Question;
