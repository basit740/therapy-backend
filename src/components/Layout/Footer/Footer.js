import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-left'>
				@ <strong>My Therapy Tool </strong>
				<span>All Right Reserved</span>
			</div>
			<div className='footer-right'>
				<Link to='/reviews'>REVIEWS</Link>
				<Link to='/about'>ABOUT</Link>
				<Link to='/blog'>BLOG</Link>
				<Link to='/updates'>UPDATES</Link>
			</div>
		</div>
	);
};

export default Footer;
