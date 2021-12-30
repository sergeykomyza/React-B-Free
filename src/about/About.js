import React from 'react'

import './about.sass'

import {Button} from '../button/Button'

import logoText from '../img/logo_befree_text.svg'

import aboutImg from '../img/about/about.webp'

function About(){
	const state = {
		classBtn: 'about__button'
	}
	return(
		<section id="about" className="about">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="title-box">
							<h6 className="about__title section-title">О производстве</h6>
							<img className="logo" src={logoText} alt="logo"/>
						</div>
					</div>
				</div>
				<div className="about__box">
					<div className="row">
						<div className="col-lg-8">
							<div className="about__content">
								<p className="about__text"> 
									<span className="about__text--orange">B.FREE </span>– 
									ЗАЩИТНЫЕ МАСКИ ДЛЯ СВОБОДНОГО ДЫХАНИЯ И ОБЩЕНИЯ
									<br/><br/>
									Первая Швейная Компания производит защитные (не медицинские) маски из различных материалов: неопрена, хлопка, смесовых тканей по разработанным лекалам или по моделям заказчика. 
									<br/><br/>
									У нас работает большой штат дизайнеров, технологов и других специалистов, способных быстро и качественно решить задачу любой сложности.
								</p>
								<Button selector={state.classBtn}>рассчитать</Button>
							</div>
						</div>
						<img src={aboutImg} alt="about" className="about__img"/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About