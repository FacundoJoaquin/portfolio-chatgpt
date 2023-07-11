import React from 'react';
import './AboutMe.css';
import Square from '../Square/Square';

const AboutMe = () => {
	return (
		<div className='scroll-container'>
			<div className='about-container'>
				<div className='question'>
					<Square />
					<div className='qst-txt'>
						<p>¿Quien es Facundo Joaquin? Contame sobre el</p>
					</div>
				</div>
				<div className='answer'>
					<div className='answ-txt'>
						<p>
							Facundo Joaquín es un programador frontend jr de 29 años. Reside
							en Puerto Madryn, Chubut, y ha demostrado un gran entusiasmo por
							el desarrollo web. <br />
							Facundo trabaja en una empresa local llamada Red Uno, la cual se
							destaca como proveedora de servicios de internet y también cuenta
							con tres emisoras de radio. Como parte de su rol en esta
							organización, se dedica al desarrollo de aplicaciones tanto para
							el proveedor de internet como para las radios. <br />
							Sus habilidades se centran principalmente en el uso de tecnologías
							como React, HTML, CSS y JavaScript. Además, Facundo ha adquirido
							experiencia en el uso de Tailwind CSS, una biblioteca de estilos
							utilitarios que le permite crear interfaces elegantes y eficientes
							de manera más rápida. <br />
							En su búsqueda constante por mejorar, Facundo está ampliando su
							conocimiento y actualmente está aprendiendo SvelteKit, un marco de
							trabajo moderno que destaca por su enfoque en el rendimiento y su
							facilidad de uso. Reconoce la importancia del estudio continuo
							para mantenerse al día en un campo tan dinámico como el desarrollo
							web.
							<br />
							Dentro de su portfolio, se pueden encontrar ejemplos de proyectos
							anteriores en los que ha trabajado, los cuales reflejan su
							habilidad y experiencia. Facundo también valora la educación y
							está dispuesto a compartir más detalles sobre su formación
							académica, así como cualquier otra información relevante para los
							visitantes interesados en conocer más acerca de su perfil
							profesional. <br />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
