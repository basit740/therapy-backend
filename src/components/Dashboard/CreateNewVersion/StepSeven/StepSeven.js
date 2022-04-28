import React, { useState, useEffect } from 'react';
import './StepSeven.css';
import StepSevenStatic from './StepSevenStatic';
import Thoughts from './Thoughts';

const StepSeven = () => {
	const [thoughtCards, setThoughtCards] = useState('');

	const newThoughtHandler = (newThought) => {
		console.log(newThought);

		let indexOfThoughtCard = newThought.cardId;
		setThoughtCards((thoughtCards) => {
			return [...thoughtCards[indexOfThoughtCard].thoughts, newThought];
		});
	};
	return (
		<section className='step-seven'>
			<h2>Identify and elimnate "The Monkey Mind"</h2>

			<StepSevenStatic />
			<div className='thoughts'>
				<Thoughts />
			</div>
		</section>
	);
};

export default StepSeven;
