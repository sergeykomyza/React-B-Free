import React from 'react'
import './sizes.sass'

import {Size} from './Size'

import sizesBg from '../img/sizes/mazok_razmeri.webp'
import logoText from '../img/logo_befree_text.svg'
import drawing1 from '../img/sizes/maska_140x100mm.png'

const sectionBg = {
	backgroundImage: "url("+sizesBg+")"
}

function Sizes(){
	const state = {
		sizes: [
			{sizesImg: drawing1, sizesVal: '140x100'},
			{sizesImg: drawing1, sizesVal: '140x100'},
			{sizesImg: drawing1, sizesVal: '140x100'},
			{sizesImg: drawing1, sizesVal: '140x100'},
			{sizesImg: drawing1, sizesVal: '140x100'},
			{sizesImg: drawing1, sizesVal: '140x100'},
			{sizesImg: drawing1, sizesVal: '140x100'}
		]
	}
	return(
		<section id="sizes" className="sizes" style={sectionBg}>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="title-box">
							<h3 className="sizes__title section-title">Размерный ряд и цветовые решения</h3>
							<img className="logo" src={logoText} alt="logo"/>
						</div>
						<p className="sizes__tagtitle">Всегда в наличии материал различных цветов и оттенков. Если Вы не выбрали нужный цвет, мы сможем подобрать любой оттенок и запечатать им поверхность ткани.</p>
					</div>
				</div>
				<div className="row">
					{
						state.sizes.map((item, i) => {
							return(
								<Size img={item.sizesImg} size={item.sizesVal} key={i} />
							)
						})
					}
				</div>
			</div>
		</section>
	)
}

export default Sizes