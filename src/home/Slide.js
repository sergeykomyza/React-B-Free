import React from 'react'

export const Slide = (props) => {
	return(
		<div className="slider__item">
			<img src={props.img} alt="slide"/>
		</div>
	)
}