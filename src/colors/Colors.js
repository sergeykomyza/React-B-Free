import React from 'react'

import './colors.sass'

import {Button} from '../button/Button'

import colorsBg from '../img/colors/mazok_colors_1-2.webp'

import { Color } from './Color'

import color1 from '../img/colors/color_1.jpg'
import color2 from '../img/colors/color_2.jpg'
import color3 from '../img/colors/color_3.jpg'
import color4 from '../img/colors/color_4.jpg'
import color5 from '../img/colors/color_5.jpg'
import color6 from '../img/colors/color_6.jpg'
import color7 from '../img/colors/color_7.jpg'
import color8 from '../img/colors/color_8.jpg'
import color9 from '../img/colors/color_9.jpg'
import color10 from '../img/colors/color_10.jpg'
import color11 from '../img/colors/color_11.jpg'
import color12 from '../img/colors/color_12.jpg'
import color13 from '../img/colors/color_13.jpg'
import color14 from '../img/colors/color_14.jpg'
import color15 from '../img/colors/color_15.jpg'
import color16 from '../img/colors/color_16.jpg'

const sectionBg = {
	backgroundImage: "url("+colorsBg+")"
}

function Colors(){
	const state = {
		colors: [
			{colorsImg: color1, colorsArticle: 'Article_001'},
			{colorsImg: color2, colorsArticle: 'Article_002'},
			{colorsImg: color3, colorsArticle: 'Article_003'},
			{colorsImg: color4, colorsArticle: 'Article_004'},
			{colorsImg: color5, colorsArticle: 'Article_005'},
			{colorsImg: color6, colorsArticle: 'Article_006'},
			{colorsImg: color7, colorsArticle: 'Article_007'},
			{colorsImg: color8, colorsArticle: 'Article_008'},
			{colorsImg: color9, colorsArticle: 'Article_009'},
			{colorsImg: color10, colorsArticle: 'Article_010'},
			{colorsImg: color11, colorsArticle: 'Article_011'},
			{colorsImg: color12, colorsArticle: 'Article_012'},
			{colorsImg: color13, colorsArticle: 'Article_013'},
			{colorsImg: color14, colorsArticle: 'Article_014'},
			{colorsImg: color15, colorsArticle: 'Article_015'},
			{colorsImg: color16, colorsArticle: 'Article_016'}
		],
		classBtn: 'colors__button'
	}
	return(
		<section id="colors" className="colors" style={sectionBg}>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="colors__box">
							{
								state.colors.map((item, i) => {
									return(
										<Color img={item.colorsImg} article={item.colorsArticle} key={i} />
									)
								})
							}
						</div>
						<Button selector={state.classBtn}>Рассчитать</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Colors