import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useNavigate } from 'react-router-dom';

import classes from './Profile.module.css';
const UserProfile = () => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const authCtx = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
		fetch(process.env.REACT_APP_API_URL + '/auth/me', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				if (data.error === 'jwt expired') {
					authCtx.logout();
					navigate('/auth', { replace: true });
					return;
				}
				setFullName(data.data.firstName + ' ' + data.data.lastName);
				setEmail(data.data.email);
			});
	});
	return (
		<div className={classes['user-profile']}>
			<div className={classes.card}>
				{/* <img src="/w3images/team2.jpg" alt="John" style="width:100%"> */}
				<h1>{fullName}</h1>
				<p className={classes.title}>{email}</p>
				<p>My Therapy Tool</p>
				{/* <div style={{ margin: '24px 0' }}>
					<a href='#'>
						<i className='fa fa-dribbble'></i>
					</a>
					<a href='#'>
						<i className='fa fa-twitter'></i>
					</a>
					<a href='#'>
						<i className='fa fa-linkedin'></i>
					</a>
					<a href='#'>
						<i className='fa fa-facebook'></i>
					</a>
				</div> */}
				<p>
					<button>Contact</button>
				</p>
			</div>
		</div>
	);
};

export default UserProfile;
