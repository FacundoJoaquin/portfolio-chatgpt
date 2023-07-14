import React from 'react';
import './AboutMe.css';
import Answer from '../../components/Answer/Answer';
import Question from '../../components/Question/Question';
import { Link } from 'react-router-dom';

const AboutMe = () => {
	let URL = 'https://drive.google.com/file/d/1RsnqEwIFMPLXVosFx4myrCR9pAJoKVYZ/view'
	return (
		<div className='scroll-container'>
			<div className='about-container'>
				<Question>¿Quien es Facundo Joaquin? Contame sobre el</Question>
				<Answer>
					<p>
						<span className='resaltador'>Facundo Joaquín</span> es un
						programador frontend jr de 29 años con un entusiasmo por el
						desarrollo web. <br />
						Trabaja en <span className='resaltador'>Red Uno</span>, una empresa
						proveedora de servicios de internet y emisoras de radio de su
						ciudad, Puerto Madryn.
						<br /> Se dedica al desarrollo de aplicaciones tanto para el
						proveedor de internet como para las radios. Sus habilidades incluyen{' '}
						<span className='resaltador'>React, HTML, CSS</span> y{' '}
						<span className='resaltador'>JavaScript</span>, con experiencia en{' '}
						<span className='resaltador'>Tailwind CSS</span>. Está aprendiendo{' '}
						<span className='resaltador'>SvelteKit</span> para mejorar su
						conocimiento y valora la educación. En su portfolio muestra ejemplos
						de proyectos anteriores que reflejan su habilidad y experiencia.
						Está dispuesto a compartir detalles sobre su formación académica y
						otros aspectos relevantes de su perfil profesional. <br />
						<Link to={URL} target='_blank'><span className="resaltador">Puedes revisar su CV aquí</span></Link>
					</p>
				</Answer>
			</div>
		</div>
	);
};

export default AboutMe;
