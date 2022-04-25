import React from 'react';

import './Footer.css';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-left'>
				@ <strong>My Therapy Tool </strong>
				<span>All Right Reserved</span>
			</div>
			<div className='footer-right'>
				<a href='#'>REVIEWS</a>
				<a href='#'>ABOUT</a>
				<a href='#'>BLOG</a>
				<a href='#'>UPDATES</a>
			</div>
		</div>
	);
};

export default Footer;
