import React, { useState } from 'react';
import './StepThree.css';

function StepThreeAdd({ i, onReflection, onHabit, habit, reflection }) {
	const textAreaHandler = (event) => {
		onHabit(event.target.value);
	};
	const inputHandler = (event) => {
		onReflection(event.target.value);
	};
	return (
		<>
			<div className='identify'>
				<div>{i}</div>
				<div>
					<textarea onChange={textAreaHandler} value={habit}></textarea>
					<br />
					<div>Reflection</div>
					<input
						className='reflectionInputs'
						onChange={inputHandler}
						value={reflection}
					/>
				</div>
			</div>
		</>
	);
}

export default StepThreeAdd;
