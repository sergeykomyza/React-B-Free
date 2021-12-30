import React, {useState} from 'react'

import './gallery.sass'

import casesBg from '../img/gallery/gallery_bg.jpg'

import { Case } from './Case'
import case1 from '../img/gallery/1-min.jpg'
import case2 from '../img/gallery/2-min.jpg'
import case3 from '../img/gallery/3-min.jpg'
import case4 from '../img/gallery/4-min.jpg'
import case5 from '../img/gallery/5-min.jpg'
import case6 from '../img/gallery/6-min.jpg'
import case7 from '../img/gallery/7-min.jpg'
import case8 from '../img/gallery/8-min.jpg'
import case9 from '../img/gallery/9-min.jpg'

import {Button} from '../button/Button'

const sectionBg = {
	backgroundImage: "url("+casesBg+")"
}

const Gallery = (props) => {
	const state = {
		cases: [
			{casesImg: case1},
			{casesImg: case2},
			{casesImg: case3},
			{casesImg: case4},
			{casesImg: case5},
			{casesImg: case6},
			{casesImg: case7},
			{casesImg: case8},
			{casesImg: case9}
		],
		moreCases: [
			{casesImg: case1},
			{casesImg: case2},
			{casesImg: case3},
			{casesImg: case4},
			{casesImg: case5},
			{casesImg: case6},
			{casesImg: case7},
			{casesImg: case8},
			{casesImg: case9}
		]
	}
	const [isShow, setIsShow] = useState(true);
	const toggleMoreCases = () => setIsShow(!isShow)
	return(
		<section id="case" className="cases" style={sectionBg}>
			<div className="container">

				<div className="row">
					<div className="col">
						<h6 className="cases__title">Галерея работ</h6>
					</div>
				</div>

				<div className="row">
					{
						state.cases.map((item, i) => {
							return(
								<Case img={item.casesImg} key={i} />
							)
						})
					}
				</div>

				<div className={isShow ? "cases__full" : "cases__full--open"}>
					<div className="row">
						{
							state.moreCases.map((item, i) => {
								return(
									<Case img={item.casesImg} key={i} />
								)
							})
						}
					</div> 
				</div>

				<div className="row">
					<div className="col">
						<div className="cases__buttons"> 
							<button className={isShow ? "cases__more" : "cases__more active"} onClick={toggleMoreCases}>{isShow ? "показать все" : "скрыть все"}</button>
							<Button>рассчитать</Button>
						</div>
					</div>
				</div>

			</div>
		</section>
	)
}

export default Gallery