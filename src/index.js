import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';

import Header from './header/Header'
import Home from './home/Home'
import Quality from './quality/Quality'
import { Divider } from './divider/Divider'
import Sizes from './sizes/Sizes'
import Colors from './colors/Colors'
import Advantages from './advantages/Advantages'
import Examples from './examples/Examples'
import Approach from './approach/Approach'
import Gallery from './gallery/Gallery'
import About from './about/About'
import Contacts from './contacts/Contacts';

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Home />
		<Quality />
		<Divider />
		<Sizes />
		<Colors />
		<Divider />
		<Advantages />
		<Examples />
		<Approach />
		<Gallery />
		<About />
		<Contacts />
	</React.StrictMode>,
	document.getElementById('root')
);
