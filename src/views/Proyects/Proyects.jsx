import React, { useState } from 'react';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';
import { Link } from 'react-router-dom';
import ModalImg from '../../components/ModalImg/ModalImg';
import './Proyects.css';

const Proyects = () => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div className='scroll-container'>
			<div className='about-container'>
				<Question>¿Me podrías comentar los proyectos que realizó?</Question>
				<Answer>
					<p>
						Dentro del perfil de GitHub de Facundo, se encuentran una variedad
						de proyectos que reflejan su pasión y habilidades en el desarrollo
						web. Cada proyecto es un testimonio de su experiencia en el uso de
						tecnologías como HTML, CSS, JavaScript y React. Desde aplicaciones
						interactivas hasta sitios web responsivos, los proyectos destacan su
						capacidad para crear interfaces atractivas y funcionales. Además, ha
						explorado bibliotecas y frameworks como Bootstrap y Tailwind CSS
						para impulsar la eficiencia en el desarrollo. Los proyectos en
						GitHub ofrecen a los visitantes la oportunidad de explorar y conocer
						en profundidad el trabajo de Facundo en el campo del desarrollo web.{' '}
						<br />A continuación te dejo los links a sus repositorios:
					</p>
					<ul>
						<p>
							<li>
								<span className='resaltador'>Tuki</span>{' '}
								- Aplicación web que te permite marcar en tiempo real distinto tipos de controles de transito. De Front utilice React junto a distintas tecnologías como Redux, Tailwind, Leaflet y de Back decidí apoyarme en firebase<br />
								<Link to={'https://main--remarkable-cucurucho-f08c98.netlify.app/'}>
									<span className='resaltador'>Link del deploy</span>
								</Link>
							</li>

							<li>
								<span className='resaltador'>Pokeno</span> - Ecommerce ficticio
								de Pokemon con temática retro realizado con React Js y Firebase.{' '}
								<br />
								<Link to={'https://github.com/FacundoJoaquin/PF-React-Joaquin-Facundo/'}>
									<span className='resaltador'>Link del repositorio</span>
								</Link>{' '}
								-{' '}
								<Link to={'https://fanciful-beijinho-c66be9.netlify.app/'}

								>
									<span className='resaltador'>Link del deploy</span>
								</Link>
							</li>

							<li>
								<span className='resaltador'>Reproductor radial para LU17</span>{' '}
								- Reproductor de radio realizado para Red Uno, empresa que tiene
								a su cargo distintas radios, entre ellas LU17. ¡Puedes entrar a disfrutar una buena radio chubutense!. <br />
								<Link to={'https://dainty-tarsier-5f55ba.netlify.app/'}>
									<span className='resaltador'>Link del deploy</span>
								</Link>
							</li>

							<li>
								<span className='resaltador'>YWG</span> - Agencia de turismo
								hecha únicamente con HTML, CSS y SCSS <br />
								<Link
									to={'https://github.com/FacundoJoaquin/PF-Joaquin-Facundo'}
								>
									<span className='resaltador'>Link del repositorio</span>
								</Link>{' '}
								-{' '}
								<Link
									to={'https://facundojoaquin.github.io/PF-Joaquin-Facundo/'}
								>
									<span className='resaltador'>Link del deploy</span>
								</Link>
							</li>
							<li>
								<span className='resaltador'>Calculadora de Pedidos Ya</span> -
								Trabajo realizado para el curso de JavaScript, su función es
								calcular fehacientemente el monto a cobrar por un repartidor de
								PedidosYa por cada pedido realizado <br />
								<Link
									to={
										'https://github.com/FacundoJoaquin/Proyecto-Final-Joaquin-Facundo'
									}
								>
									<span className='resaltador'>Link del repositorio</span>
								</Link>{' '}
								-{' '}
								<Link
									to={
										'https://facundojoaquin.github.io/Proyecto-Final-Joaquin-Facundo/'
									}
								>
									<span className='resaltador'>Link del deploy</span>
								</Link>
							</li>

							<li>
								<span className='resaltador'>Primer portfolio</span> - Primer
								portfolio realizado con HTML, CSS y JS, utilizando SCSS. <br />
								<Link to={'https://github.com/FacundoJoaquin/portfolio'}>
									<span className='resaltador'>Link del repositorio</span>
								</Link>{' '}
								-{' '}
								<Link to={'https://facundojoaquin.github.io/portfolio/'}>
									<span className='resaltador'>Link del deploy</span>
								</Link>
							</li>
							<li>
								<span className='resaltador'>Vertis</span> - Vertis es un
								proyecto desarrollado con Sveltekit para venta de reproducción y producción
								publicitaria, todo la página está fedeada utilizando API
								Restful. Por razones obvias, no puedo mostrar el código pero
								clickeando aquí podrás ver distintas imagenes. <br />
								<span className='resaltador pointer' onClick={openModal}>
									Ver imagenes
								</span>
							</li>


						</p>
					</ul>
				</Answer>
			</div>
			{showModal && <ModalImg closeModal={closeModal} />}
		</div>
	);
};

export default Proyects;
