import React from 'react'
import './header.sass'
import headerLogo from '../img/header/logo_befree_orange.svg'
import bgLink from '../img/header/link_bg.png'

const linkStyle = {
	backgroundImage: "url(" + bgLink + ")"
}

function activeMenu(e){
	e.preventDefault();
	const gamburger = document.querySelector('.gamburger')
	const firstLine = gamburger.querySelectorAll('span')[0]
	const middleLine = gamburger.querySelectorAll('span')[1]
	const lastLine = gamburger.querySelectorAll('span')[2]
	const mMenu = document.querySelector('.navi__menu')
	middleLine.classList.toggle('open')
	firstLine.classList.toggle('open')
	lastLine.classList.toggle('open')
	mMenu.classList.toggle('navi__menu--active')
}

function Header() {

	return (
		<header className="header">
			<div className="progressbar">
				<div className="progressbar__line"></div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
						<nav className="header__navi navi">
							<div className="navi__logo">
								<img src={headerLogo} alt="logo" />
							</div>
							<ul className="navi__menu menu">
								<li className="menu__item"><a href="" className="menu__link" style={linkStyle}>Качество</a></li>
								<li className="menu__item"><a href="" className="menu__link" style={linkStyle}>Размеры</a></li>
								<li className="menu__item"><a href="" className="menu__link" style={linkStyle}>Преимущества</a></li>
								<li className="menu__item"><a href="" className="menu__link" style={linkStyle}>Наши работы</a></li>
								<li className="menu__item"><a href="" className="menu__link" style={linkStyle}>Подход</a></li>
								<li className="menu__item"><a href="" className="menu__link" style={linkStyle}>Галерея</a></li>
								<li className="menu__item"><a href="" className="menu__link" style={linkStyle}>О производстве</a></li>
								<li className="menu__item"><a href="" className="menu__link" style={linkStyle}>Контакты</a></li>
							</ul>
							<div className="navi__contacts contacts-navi">
								<a className="contacts-navi__item instagram" href="https://www.instagram.com/imleather_ru/?hl=ru" target="_blank">
									<svg id="instagram" x="0px" y="0px" viewBox="0 0 37 37">
										<path className="st0" d="M36.4,11.1c-0.1-1.9-0.4-3.2-0.8-4.4c-0.5-1.2-1.2-2.3-2.1-3.2c-0.9-0.9-2-1.6-3.2-2.1c-1.1-0.4-2.5-0.8-4.4-0.8c-1.9-0.1-2.5-0.1-7.4-0.1s-5.5,0-7.4,0.1C9.2,0.7,7.9,1,6.7,1.4C5.5,1.9,4.4,2.6,3.5,3.5c-0.9,0.9-1.6,2-2.1,3.2C1,7.9,0.7,9.2,0.6,11.1c-0.1,1.9-0.1,2.5-0.1,7.4s0,5.5,0.1,7.4c0.1,1.9,0.4,3.2,0.8,4.4c0.5,1.2,1.2,2.3,2.1,3.2c0.9,0.9,2,1.6,3.2,2.1c1.1,0.4,2.5,0.8,4.4,0.8c1.9,0.1,2.5,0.1,7.4,0.1s5.5,0,7.4-0.1c1.9-0.1,3.2-0.4,4.4-0.8c2.4-0.9,4.3-2.8,5.3-5.3c0.4-1.1,0.8-2.5,0.8-4.4c0.1-1.9,0.1-2.5,0.1-7.4S36.5,13,36.4,11.1z"></path>
										<path className="st1" d="M33.2,25.8c-0.1,1.8-0.4,2.7-0.6,3.3c-0.6,1.6-1.8,2.8-3.4,3.4c-0.6,0.2-1.6,0.5-3.3,0.6c-1.9,0.1-2.5,0.1-7.3,0.1s-5.4,0-7.3-0.1c-1.8-0.1-2.7-0.4-3.3-0.6c-0.8-0.3-1.5-0.7-2.1-1.3c-0.6-0.6-1.1-1.3-1.3-2.1c-0.2-0.6-0.5-1.6-0.6-3.3c-0.1-1.9-0.1-2.5-0.1-7.3s0-5.4,0.1-7.3c0.1-1.8,0.4-2.7,0.6-3.3c0.3-0.8,0.7-1.5,1.4-2.1c0.6-0.6,1.3-1.1,2.1-1.3C8.5,4.2,9.5,4,11.2,3.9c1.9-0.1,2.5-0.1,7.3-0.1c4.8,0,5.4,0,7.3,0.1c1.8,0.1,2.7,0.4,3.3,0.6c0.8,0.3,1.5,0.7,2.1,1.3c0.6,0.6,1.1,1.3,1.3,2.1c0.2,0.6,0.5,1.6,0.6,3.3c0.1,1.9,0.1,2.5,0.1,7.3S33.3,23.9,33.2,25.8z"></path>
										<path className="st2" d="M18.5,9.3c-5.1,0-9.2,4.1-9.2,9.2s4.1,9.2,9.2,9.2c5.1,0,9.2-4.1,9.2-9.2S23.6,9.3,18.5,9.3z M18.5,24.5c-3.3,0-6-2.7-6-6s2.7-6,6-6c3.3,0,6,2.7,6,6S21.8,24.5,18.5,24.5z"></path>
										<path className="st2" d="M30.3,8.9c0,1.2-1,2.2-2.2,2.2c-1.2,0-2.2-1-2.2-2.2c0-1.2,1-2.2,2.2-2.2C29.3,6.7,30.3,7.7,30.3,8.9z"></path>
									</svg>
								</a>
								<a className="contacts-navi__item whatsapp" href="https://wa.me/+79859221005" target="_blank">
									<svg id="whatsapp" x="0px" y="0px" viewBox="0 0 37 37">
										<path className="st0" d="M31.3,5.7c-3.4-3.4-7.9-5.3-12.7-5.3c-9.9,0-17.9,8-17.9,17.9c0,3.2,0.8,6.2,2.4,9l-2.5,9.3l9.5-2.5c2.6,1.4,5.6,2.2,8.6,2.2h0c9.9,0,17.9-8,17.9-17.9C36.5,13.6,34.6,9.1,31.3,5.7z"></path>
										<path className="st1" d="M18.6,33.2L18.6,33.2c-2.7,0-5.3-0.7-7.6-2.1l-0.5-0.3l-5.6,1.5l1.5-5.5L6,26.3c-1.5-2.4-2.3-5.1-2.3-7.9c0-8.2,6.7-14.9,14.9-14.9c4,0,7.7,1.6,10.5,4.4s4.4,6.6,4.4,10.5C33.5,26.6,26.8,33.2,18.6,33.2z"></path>
										<path className="st2" d="M26.7,22.1c-0.4-0.2-2.6-1.3-3.1-1.5c-0.4-0.1-0.7-0.2-1,0.2c-0.3,0.4-1.2,1.5-1.4,1.8c-0.3,0.3-0.5,0.3-1,0.1c-0.4-0.2-1.9-0.7-3.6-2.2c-1.3-1.2-2.2-2.7-2.5-3.1c-0.3-0.4,0-0.7,0.2-0.9c0.5-0.6,1-1.2,1.1-1.5c0.1-0.3,0.1-0.6,0-0.8c-0.1-0.2-1-2.4-1.4-3.3c-0.4-0.9-0.7-0.8-1-0.8c-0.3,0-0.6,0-0.9,0c-0.3,0-0.8,0.1-1.2,0.6c-0.4,0.4-1.6,1.5-1.6,3.7s1.6,4.3,1.8,4.6c0.2,0.3,3.2,4.8,7.7,6.8c1.1,0.5,1.9,0.7,2.6,0.9c1.1,0.3,2,0.3,2.8,0.2c0.9-0.1,2.6-1.1,3-2.1c0.4-1,0.4-1.9,0.3-2.1C27.5,22.4,27.2,22.3,26.7,22.1z"></path>
									</svg>
								</a>
								<a className="contacts-navi__item phone" href="tel:+74951551967">
									<svg id="phone" x="0px" y="0px" viewBox="0 0 37 37">
										<path className="st0" d="M30.6,0.5H6.4c-3.2,0-5.9,2.6-5.9,5.9v24.3c0,3.2,2.6,5.9,5.9,5.9h24.3c3.2,0,5.9-2.6,5.9-5.9V6.4C36.5,3.1,33.9,0.5,30.6,0.5z"></path>
										<path className="st1" d="M33.5,30.6c0,1.6-1.3,2.9-2.9,2.9H6.4c-1.6,0-2.9-1.3-2.9-2.9V6.4c0-1.6,1.3-2.9,2.9-2.9h24.3c1.6,0,2.9,1.3,2.9,2.9V30.6z"></path>
										<path className="st2" d="M27,25.4c-0.2,0.5-0.8,1-1.6,1.4c-0.8,0.4-1.6,0.6-2.3,0.6c-0.2,0-0.4,0-0.6,0c-0.2,0-0.4-0.1-0.5-0.1c-0.1,0-0.3-0.1-0.6-0.2c-0.2-0.1-0.4-0.1-0.5-0.2c-0.1,0-0.3-0.1-0.6-0.2c-0.3-0.1-0.4-0.2-0.5-0.2c-1.9-0.7-3.7-1.9-5.5-3.7c-1.8-1.8-3.1-3.6-3.7-5.5c0-0.1-0.1-0.2-0.2-0.5c-0.1-0.3-0.2-0.5-0.2-0.6c0-0.1-0.1-0.3-0.2-0.5c-0.1-0.2-0.1-0.4-0.2-0.6c0-0.1-0.1-0.3-0.1-0.5c0-0.2,0-0.4,0-0.6c0-0.7,0.2-1.4,0.6-2.3c0.4-0.8,0.9-1.4,1.4-1.6c0.6-0.3,1.2-0.4,1.7-0.4c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0.1,0.3,0.3c0.1,0.2,0.3,0.4,0.4,0.7c0.2,0.3,0.3,0.6,0.5,0.8c0.1,0.3,0.3,0.5,0.4,0.8c0.1,0.3,0.2,0.4,0.3,0.5c0,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.3,0.3,0.4c0.1,0.1,0.1,0.2,0.1,0.4c0,0.2-0.1,0.4-0.4,0.6c-0.2,0.2-0.5,0.5-0.8,0.7c-0.3,0.2-0.5,0.4-0.8,0.7c-0.2,0.2-0.4,0.4-0.4,0.6c0,0.1,0,0.2,0.1,0.3c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.1,0.2c0.6,1.1,1.4,2.1,2.2,2.9c0.8,0.8,1.8,1.6,2.9,2.2c0,0,0.1,0.1,0.2,0.1c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0.1,0.3,0.1c0.2,0,0.4-0.2,0.8-0.6c0.3-0.4,0.7-0.8,1-1.1c0.3-0.4,0.6-0.6,0.8-0.6c0.1,0,0.2,0,0.4,0.1c0.1,0.1,0.3,0.1,0.4,0.3c0.2,0.1,0.3,0.2,0.3,0.2l0.9,0.5c0.6,0.3,1.1,0.6,1.5,0.9c0.4,0.2,0.6,0.4,0.7,0.5c0,0.1,0,0.2,0,0.3C27.3,24.2,27.2,24.8,27,25.4z"></path>
									</svg>
								</a>
							</div>
							<div className="gamburger" onClick={activeMenu}>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;


