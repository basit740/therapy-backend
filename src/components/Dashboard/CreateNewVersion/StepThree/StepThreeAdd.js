import React, { useState } from 'react';
import './StepThree.css';

function StepThreeAdd(props) {
	let { i, onReflection, onHabit } = props;

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
					<textarea onChange={textAreaHandler}></textarea>
					<br />
					<div>Reflection</div>
					<input className='reflectionInputs' onChange={inputHandler} />
				</div>
			</div>
		</>
	);
}

export default StepThreeAdd;
