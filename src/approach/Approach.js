import React from 'react'

import './approach.sass'

import {Button} from '../button/Button'

import logoText from '../img/logo_befree_text.svg'

import approachBg from '../img/individual/individual_bg.webp'

const sectionBg = {
	backgroundImage: "url("+approachBg+")"
}

function Approach(){
	const state = {
		classBtn: 'approach__button'
	}
	return(
		<section id="approach" className="approach" style={sectionBg}>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="title-box">
							<h5 className="sizes__title section-title">Индивидуальный подход</h5>
							<img className="logo" src={logoText} alt="logo"/>
						</div>
					</div>
				</div>
				<div className="approach__content">
					<div className="row">
						<div className="col-lg-7">
							<p className="approach__text">
								По желанию заказчика разработаем 
								<span className="approach__text--orange">любую форму </span>
								и 
								<span className="approach__text--orange">состав маски. </span>
								Мы готовы ко всему!
							</p>
							<Button selector={state.classBtn}>хочу свою маску</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="approach__line"></div>
		</section>
	)
}

export default Approach