import React from 'react'
import './button.sass'

import buttonArrow from '../img/icon_cta_orange.svg'

export const Button = ({children, selector}) => {
	return(
		<button className={"button " +selector+ " "}>
			{children}
			<img src={buttonArrow} alt="arrow"/>
		</button>
	)
}
