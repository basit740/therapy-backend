import React from 'react';
import './MyVersionsRight.css';
import Activity from '../Activity.js';

const MyVersionsRight = () => {
	return (
		<div className='my-versions-right'>
			<h6>RECENT ACTIVITY</h6>
			<Activity></Activity>
			<Activity></Activity>
			<Activity></Activity>
			<Activity></Activity>
		</div>
	);
};

export default MyVersionsRight;
