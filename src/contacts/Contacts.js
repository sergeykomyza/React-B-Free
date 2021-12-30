import React, { useState } from 'react'

import './contacts.sass'

import logoText from '../img/logo_befree_text.svg'

import buttonArrow from '../img/icon_cta_orange.svg'

import { Office } from './Office'
import { Production } from './Production'

function Contacts() {
	const [active, setActive] = useState(0)
	const handleClick = e => {
		const index = parseInt(e.target.id, 0)
		if( index != active ){
			setActive(index)
		}
	}
	return (
		<section id="contacts" className="contacts">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="title-box">
							<h6 className="contacts__title section-title">контакты</h6>
							<img className="logo" src={logoText} alt="logo" />
						</div>
						<div className="contacts__adress tabs">

							<div className="tabs__header">
								<button className="tabs__button button" onClick={handleClick} id={0}>офис<img src={buttonArrow} alt=""/></button>
								<button className="tabs__button button" onClick={handleClick} id={1}>производство<img src={buttonArrow} alt=""/></button>
							</div>

							{
								active === 0 ? <Office /> : <Production />
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contacts