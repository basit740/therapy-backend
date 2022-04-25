import React from 'react';
import './Activity.css';
import DiamondSquare from './Shapes/DiamondSquare';

const Activity = () => {
	return (
		<div className='activity'>
			<div className='activity__left'>
				<div className='activity__sign'>
					<DiamondSquare />
				</div>
				<div className='activity__info'>
					<h6>You completed Step 3 of 9</h6>
					<span>Dealing with the loss of Grandma</span>
				</div>
			</div>
			<div className='activity__right'>
				<span>08/12/2020</span>
			</div>
		</div>
	);
};

export default Activity;
