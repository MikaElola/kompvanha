import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import taidottyohon from '../img/taidottyohon.png'
import haagahelia from '../img/hh_logo.png'

class Navbar extends Component {

	render() {
		return (
			<nav>
				<img src={taidottyohon} alt={taidottyohon} id="logo" />
				<img src={haagahelia} alt={haagahelia} id="logo2" />
			</nav>
		)
	}
}

export default Navbar;