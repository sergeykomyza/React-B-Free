import React from 'react'

export const Color = (props) => {
	return(
		<a href={props.img} data-fancybox="gallery" className="colors__item color">
			<svg width="100%" height="100%">
				<defs>
					<linearGradient id="Article_001" x1="30%" y1="70%">
					<stop offset="0%" stopColor="#bbb">
						<animate attributeName="stop-color" values="#FFF; #bbb; #FFF" dur="3s" repeatCount="indefinite"></animate>
					</stop>
					<stop offset="100%" stopColor="#926BFF">
						<animate attributeName="stop-color" values="#bbb; #FFF; #bbb;" dur="3s" repeatCount="indefinite"></animate>
					</stop>
					</linearGradient>
				</defs>
				<circle r="50%" cy="50%" cx="50%" fill="url('#Article_001')"></circle>
			</svg>
			<img className="color__img" src={props.img} alt="color"/>
			<span className="color__article">{props.article}</span>
		</a>
	)
}