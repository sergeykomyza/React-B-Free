import React from 'react'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

import buttonArrow from '../img/icon_cta_orange.svg'

export const Production = () => {
	return(
		<div className="tabs__content">
			<div className="contacts__data">
				<span className="contacts__item">г. Москва, Таганка (Большие Каменщики 9, стр. Б)</span>
				<a className="contacts__item" href="mailto:promo@promoline.ru">promo@promoline.ru</a>
				<a className="contacts__item" href="tel:+74951551967">+7 (495) 155-19-67</a>
				<div className="contacts__order">
				<button className="contacts__button button">
					перезвоните мне
					<img src={buttonArrow} alt=""/>
				</button>
				</div>
			</div>
			<div id="map" className="contacts__map">
				<YMaps>
					<Map defaultState={{ center: [55.738495, 37.655688], zoom: 13 }} width="100%" height="100%" >
						<Placemark geometry={[55.738495, 37.655688]} />
					</Map>
				</YMaps>
			</div>
		</div>
	)
}