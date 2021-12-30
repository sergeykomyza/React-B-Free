import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Case = (props) => {
	return(
		<div className="col-md-4 col-4">
			<a className="cases__item case" href={props.img} data-fancybox="cases">
				<FontAwesomeIcon icon={faSearch} />
				<img className="case__img" src={props.img} alt="case" />
			</a>
		</div>
	)
}