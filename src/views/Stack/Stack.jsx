import React from 'react';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';
import { Link } from 'react-router-dom';

const Stack = () => {
	return (
		<div className='scroll-container'>
			<div className='about-container'>
				{' '}
				<Question>¿Que stack tecnológico maneja Facundo?</Question>
				<Answer>
					<p>
						Facundo, como desarrollador web junior, cuenta con conocimiento en{' '}
						<span className='resaltador'>HTML, CSS y JavaScript</span>, y ha
						obtenido certificaciones que respaldan su experiencia en estas
						áreas. Además, se ha especializado en el uso de
						<span className='resaltador'>React</span> para crear interfaces
						interactivas. En su actual etapa de aprendizaje, se encuentra
						enfocado en{' '}
						<span className='resaltador'>
							ampliar sus habilidades con SvelteKit
						</span>
						, una tecnología prometedora para el desarrollo web. También está
						dedicando tiempo a aprender sobre{' '}
						<span className='resaltador'>bases de datos</span>, más
						especificamente <span className='resaltador'>SQL</span>, ya que es
						un conocimiento fundamental en su trabajo. Facundo está emocionado
						por continuar creciendo y aprovechar al máximo estas tecnologías en
						su desarrollo profesional.
					</p>
					<ul>
						<p>
							<li>
								<span className='resaltador'>HTML y CSS</span> - Curso realizo
								en Coderhouse -
								<Link
									to={
										'https://www.coderhouse.com/certificados/63e81963b47c8f000f638e8b'
									}
									target='_blank'
								>
									<span className='resaltador'>Link del certificado</span>
								</Link>{' '}
							</li>
							<li>
								<span className='resaltador'>JavaScript</span> - Curso realizo
								en Coderhouse -
								<Link
									to={
										'https://www.coderhouse.com/certificados/6453725464a952000263adb9'
									}
									target='_blank'
								>
									<span className='resaltador'>Link del certificado</span>
								</Link>{' '}
							</li>
							<li>
								<span className='resaltador'>React Js</span> - Curso realizo en
								Coderhouse -
								<Link to={'https://www.coderhouse.com/certificados/64b5e60d51e741000286348b'} target='_blank'>
									<span className='resaltador'>Link del certificado</span>
								</Link>{' '}
							</li>
						</p>
					</ul>
					<p>
						Así mismo, Facundo ha aprendido a utilizar distintas herramientas útiles para la realización de su trabajo, entre las que cabe mencionar <span className="resaltador">Playwright, Postman, DBeaver y Vitest</span>.
					</p>
				</Answer>
			</div>
		</div>
	);
};

export default Stack;
