import React from 'react'
import './divider.sass'

import divider from '../img/divider.png'

export const Divider = () => {
	return(
		<div className="line">
			<img src={divider} alt="divider"/>
		</div>
	)
}