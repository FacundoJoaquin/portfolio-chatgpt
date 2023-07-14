import React from 'react';
import './Contact.css';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';
import { Link } from 'react-router-dom';

const Contact = () => {
	let urlLinkedin = 'https://www.linkedin.com/in/facujoaquin/';
	return (
		<div className='scroll-container'>
			<div className='about-container'>
				<Question>¿Cómo puedo hacer para contactarlo?</Question>
				<Answer>
					<p>
						Para contactar a Facundo, puedes utilizar la funcionalidad de la
						barra lateral haciendo clic en{' '}
						<span className='resaltador'>New Chat</span>. Esto abrirá una
						ventana donde podrás{' '}
						<span className='resaltador'>
							enviarle un correo electrónico directamente
						</span>
						. Además, encontrarás los datos de contacto de Facundo en su
						currículum, por si prefieres utilizar esa información. A
						continuación, se detallan las redes por las cuales también puedes
						contactarlo:
					</p>
					<ul>
						<p>
							<Link to={urlLinkedin}>
								<li>
									<span className='resaltador'>Link a LinkedIn</span>
								</li>
							</Link>
							<li>
								<span className='resaltador'>Correo electrónico:</span>{' '}
								facundojoaquinn@gmail.com
							</li>
							<li>
								<span className='resaltador'>Numero de teléfono:</span>{' '}
								+54 9 280-4564620
							</li>
						</p>
					</ul>{' '}
					<p>
						No dudes en utilizar cualquiera de estos medios para comunicarte con
						Facundo. Está ansioso por recibir noticias y colaborar en futuros
						proyectos, o para responder cualquier pregunta que puedas tener.{' '}
						<br /> <br />
						Además,{' '}
						<span className='resaltador'>
							Facundo agradecería mucho recibir feedback
						</span>{' '}
						sobre su currículum en la sección <span className="resaltador">Upgrade my portfolio</span>. Puedes
						brindar tu opinión de forma anónima y confidencial en la ventana de
						chat. Tu feedback es valioso y ayudará a Facundo a mejorarse. ¡No
						dudes en compartir tus sugerencias, consejos o comentarios
						constructivos!
					</p>
				</Answer>
			</div>
		</div>
	);
};

export default Contact;
