import React from 'react'

export const Size = (props) => {
	return(
		<div className="col-lg-4">
		
			<div className="sizes__item size">
				<img src={props.img} alt="size" className="size__img"/>
				<div className="size__info">
					<p className="size__name">Маска {props.size}мм</p>
					<div className="size__download">
						ЧЕРТЕЖ
						<a href={props.img} download>
							<svg x="0px" y="0px" viewBox="0 0 37 37" >
								<g>
									<path className="st0" d="M31.9,5.1c-1.1-1.1-2.5-1.6-3.9-1.6l-18.8,0C6,3.5,3.5,6,3.5,9.1v18.8c0,3.1,2.5,5.6,5.6,5.6h18.8c3.1,0,5.6-2.5,5.6-5.6V9.1C33.5,7.6,32.9,6.2,31.9,5.1z M13.2,16.2c0.3-0.3,0.9-0.3,1.2,0l3.2,3.2l0-9.4c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9l0,9.4l3.2-3.2c0.3-0.3,0.9-0.3,1.2,0c0.3,0.3,0.3,0.9,0,1.2l-4.7,4.7c-0.2,0.2-0.4,0.3-0.6,0.3c-0.2,0-0.5-0.1-0.6-0.3l-4.7-4.7C12.9,17.1,12.9,16.6,13.2,16.2z M27,27.9H10c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9H27c0.5,0,0.9,0.4,0.9,0.9C27.9,27.5,27.5,27.9,27,27.9z"></path>
								</g>
							</svg>
						</a>
					</div>
				</div>
			</div>
			
		</div>
	)
}