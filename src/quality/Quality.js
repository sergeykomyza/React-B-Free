import React from 'react'
import './quality.sass'

import {Button} from '../button/Button'
import qualityBg from '../img/quality/clouds.webp'
import mask from '../img/quality/mask.webp'
import logoText from '../img/logo_befree_text.svg'
import zoom1 from '../img/quality/pic_zoom_01.webp'
import zoom2 from '../img/quality/pic_zoom_02.webp'
import zoom3 from '../img/quality/pic_zoom_03.webp'
// import arrow1 from '../img/quality/pic_arrow_01.png'
// import arrow2 from '../img/quality/pic_arrow_02.png'
// import arrow3 from '../img/quality/pic_arrow_03.png'
// import iconCheck from '../img/quality/icon_checkmark.svg'

import {useSpring, animated} from 'react-spring'

const sectionBg = {
	backgroundImage: "url(" +  qualityBg  + ")"
}
const qualityBoxBg = {
	background: " #FFF url(" + mask + ") 313px 71px no-repeat",
	backgroundSize: "48rem"
}


function Quality(){

	const state = {
		classBtn: 'quality__button'
	}

	return(
		<section id="quality" className="quality" style={sectionBg}>
			<div className="container">
				<div className="row">
					<div className="col">
						<h2 className="quality__title section-title">Качество</h2>
						<img src={logoText} alt="logo" className="quality__logo logo"/>
						
							<div className="quality__box" style={qualityBoxBg}>
								<div className="quality__item quality__item--1 qual">
									<img src={zoom1} alt="zoom" className="qual__img"/>
									<i className="qual__text">
										Мы делаем наши маски из <br/>
										неопрена- гигроскопичного, <br/>
										гипоаллергенного и <br/>
										эластичного материала.
									</i>
								</div>
								<div className="quality__item quality__item--2 qual">
									<img src={zoom2} alt="zoom" className="qual__img"/>
									<i className="qual__text">
										Передний шов на <br/>
										масках B.Free аккуратно <br/>
										вшивается в структуру <br/>
										ткани и делает его <br/>
										малозаметным.
									</i>
								</div>
								<div className="quality__item quality__item--3 qual">
									<img src={zoom3} alt="zoom" className="qual__img"/>
									<i className="qual__text">
									Мы кроим маски на специальном <br/>
									оборудовании, поэтому края маски остаются <br/>
									мягкими и комфортными для ношения.
									</i>
								</div>
							</div>
						
						<Button selector={state.classBtn}>Рассчитать</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Quality