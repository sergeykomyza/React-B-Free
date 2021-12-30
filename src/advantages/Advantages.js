import React from 'react'

import './advantages.sass'

import logoText from '../img/logo_befree_text.svg'

import advantagesImg from '../img/advantages/advantages_clouds.webp'

import advantagesIcon1 from '../img/advantages/icon_001.svg'
import advantagesIcon2 from '../img/advantages/icon_002.svg'
import advantagesIcon3 from '../img/advantages/icon_003.svg'
import advantagesIcon4 from '../img/advantages/icon_004.svg'
import advantagesIcon5 from '../img/advantages/icon_005.svg'
import advantagesIcon6 from '../img/advantages/icon_006.svg'

import { Advantage } from './Advantage'

import { Button } from '../button/Button'

function Advantages(){
	const state = {
		advantages: [
			{advantagesIcon: advantagesIcon1, advantagesTitle: 'Собственное производство:', advantagesText: 'производим до 5 000 ед. за смену.'},
			{advantagesIcon: advantagesIcon2, advantagesTitle: 'Срок изготовления:', advantagesText: '3 рабочих дня'},
			{advantagesIcon: advantagesIcon3, advantagesTitle: 'Нанесение логотипа:', advantagesText: 'от 1 цвета до полноцветного изображения'},
			{advantagesIcon: advantagesIcon4, advantagesTitle: 'Собственный дизайнерский отдел:', advantagesText: 'оперативно визуализируем и изготовим образцы'},
			{advantagesIcon: advantagesIcon5, advantagesTitle: 'Удобная локация:', advantagesText: 'находимся в центре Москвы (300 метров от метро Таганская)'},
			{advantagesIcon: advantagesIcon6, advantagesTitle: 'Оперативная доставка:', advantagesText: 'привезем товар в любую точку России и мира'}
		],
		classBtn: 'advantages__button'
	}
	return(
		<section id="advantages" className="advantages">

			<div className="container">
				<div className="row">
					<div className="col">
						<div className="title-box">
							<h4 className="sizes__title section-title">Наши преимущества</h4>
							<img className="logo" src={logoText} alt="logo"/>
						</div>
					</div>
				</div>
				<div className="advantages__box">
					<div className="row">
						<img className="advantages__img" src={advantagesImg} alt="clouds"/>
						{
							state.advantages.map((item, i) => {
								return(
									<Advantage icon={item.advantagesIcon} title={item.advantagesTitle} text={item.advantagesText} key={i} />
								)
							})
						}
					</div>
				</div>
				<Button selector={state.classBtn}>Рассчитать</Button>
			</div>
		</section>
	)
}

export default Advantages