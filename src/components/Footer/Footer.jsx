import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='chat-container'>
				<div className='txt-area'>
					<textarea disabled name='' id='' cols='50' rows='1' value={'Conection not avaible.'}></textarea>
				</div>
        <p>Portfolio creado con React Js y CSS Vanilla. Facundo Joaquin. 2023</p>
			</div>
		</div>
	);
};

export default Footer;
