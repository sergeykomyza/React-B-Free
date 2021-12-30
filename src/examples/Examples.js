import React from 'react'

import './examples.sass'

import examplesBg from '../img/examples/cases_bg.webp'

import ex1 from '../img/examples/Product_01.webp'
import ex1Hover from '../img/examples/Product_01_hover.jpeg'
import ex2 from '../img/examples/Product_02.webp'
import ex2Hover from '../img/examples/Product_02_hover.jpeg'
import ex3 from '../img/examples/Product_03.webp'
import ex3Hover from '../img/examples/Product_03_hover.jpeg'
import ex4 from '../img/examples/Product_04.webp'
import ex4Hover from '../img/examples/Product_04_hover.jpeg'
import ex5 from '../img/examples/Product_05.webp'
import ex5Hover from '../img/examples/Product_05_hover.jpeg'

const sectionBg = {
	backgroundImage: "url("+examplesBg+")"
}

function Examples(){
	return(
		<section id="examples" className="examples" style={sectionBg}>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="title-box">
							<h5 className="sizes__title section-title">Примеры работ</h5>
						</div>
					</div>
				</div>
				<div className="examples__box">
					<div className="row">
						<div className="col-lg-4 col-6">
							<div className="examples__item example">
								<img src={ex1} alt="example" className="example__img"/>
								<img src={ex1Hover} alt="example" className="example__img--hover"/>
							</div>
						</div>
						<div className="col-lg-4 offset-lg-4 col-6">
							<div className="examples__item example">
								<img src={ex2} alt="example" className="example__img"/>
								<img src={ex2Hover} alt="example" className="example__img--hover"/>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<div className="examples__item example">
								<img src={ex3} alt="example" className="example__img"/>
								<img src={ex3Hover} alt="example" className="example__img--hover"/>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<div className="examples__item example">
								<img src={ex4} alt="example" className="example__img"/>
								<img src={ex4Hover} alt="example" className="example__img--hover"/>
							</div>
						</div>
						<div className="col-lg-4 col-6">
							<div className="examples__item example">
								<img src={ex5} alt="example" className="example__img"/>
								<img src={ex5Hover} alt="example" className="example__img--hover"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Examples