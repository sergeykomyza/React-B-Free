import React from 'react'

export const Advantage = (props) => {
	return(
		<div className="col-lg-6">
			<div className="advantages__item advantage">
				<img src={props.icon} alt="icon" className="advantage__icon"/>
				<div className="advantage__content">
					<b className="advantage__title">{props.title}</b>
					<p className="advantage__text">{props.text}</p>
				</div>
			</div>
		</div>
	)
}