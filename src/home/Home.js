import React from 'react'
import './home.sass'

import slide1 from '../img/home/main_slide_01.webp'
import slide2 from '../img/home/main_slide_02.webp'

import {Slide} from './Slide'

import {Button} from '../button/Button'

function Home(pops) {

	const state = {
		slides: [
			{slide: slide1},
			{slide: slide2}
		],
		classBtn: 'home__button'
	}

	React.useEffect(() => {
		function sliderLogic(slideSelector) {
			let slideIndex = 0,
				slides = document.querySelectorAll(slideSelector);
			setInterval(function () {
				nextSlide(1);
			}, 6000);
			goSlide(slideIndex);
			function goSlide(n) {
				if (n > slides.length - 1) {
					slideIndex = 0;
				}
				if (n < 0) {
					slideIndex = slides.length - 1;
				}
				slides.forEach(item => {
					item.style.display = 'none';
					item.classList.remove('animate__animated', 'animate__fadeIn');
				});
				slides[slideIndex].style.display = 'block';
				slides[slideIndex].classList.add('animate__animated', 'animate__fadeIn');
			}
			function nextSlide(n) {
				goSlide(slideIndex += n);
			}
		}
		sliderLogic('.slider__item');
	}, []);

	return(
		
		<section className="home">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="home__box">
							<div className="home__content">
								<h1 className="home__title">
									Защитные маски<br />из неопрена<br />c логотипом<br />вашей компании
								</h1>
								<p className="home__tagtitle">
									Подходит всем! <br />Для детей и взрослых 
								</p>
								<Button selector={state.classBtn}>Рассчитать</Button>
							</div>
							
								<div className="home__slider slider">
									<div className="slider__line">
										{
											state.slides.map((item, i) => {
												return(
													<Slide img={item.slide} key={i} />
												)
											})
										}
									</div>
								</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home