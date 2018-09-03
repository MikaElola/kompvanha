import React, { Component } from 'react';

class Footer extends Component {

	render() {
		return (
			<footer>
				<ul>	
					<li className="footer-links">
							<a href="https://www.facebook.com/HaagaHeliaAMK/?userLang=en" target="_blank" rel="noopener noreferrer">
							<i className="fa fa-facebook" /></a>
					</li>

					<li className="footer-links">
						<a href="https://www.youtube.com/user/HAAGAHELIAviestinta?userLang=en" target="_blank" rel="noopener noreferrer">
						<i className="fa fa-youtube" /></a>
					</li>

					<li className="footer-links">
						<a href="https://twitter.com/haagaheliaamk?userLang=en" target="_blank" rel="noopener noreferrer">
						<i className="fa fa-twitter" /></a>
					</li>

					<li className="footer-links">
						<a href="https://www.linkedin.com/school/haaga-helia-university-of-applied-sciences/" target="_blank" rel="noopener noreferrer">
						<i className="fa fa-linkedin" /></a>
					</li>

					<li className="footer-links">
						<a href="https://www.instagram.com/haagahelia/?userLang=en" target="_blank" rel="noopener noreferrer">
						<i className="fa fa-instagram" /></a>
					</li>
				</ul>
			</footer>
		)
	}
}

export default Footer;