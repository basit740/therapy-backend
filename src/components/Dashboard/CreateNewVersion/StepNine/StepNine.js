import React from 'react';
import VisionBoard from './VisionBoard.js';

import classes from './StepNine.module.css';

const StepNine = () => {
	return (
		<section className={classes.stepNineOfEleven}>
			<h1>Create a vision board of goals and dreams</h1>
			<p>
				There is a plenty of proof of how benefitial it is to have a clear set
				of goals and plans as they can provide a sense of direction and meaning.
				A vision board helps you to do just that and can bring hope and clarity
				when things may not seem to going your way. It is a great reminder of
				what is possible when we strive to do better, when we are working
				towards something, and always keep in mind that the journey alone is a
				large and very beneficial part of the process of achieving your goal.
			</p>
			<p>
				What can the rest of your life look like from today? Do you want to
				loose your weight, stop smoking, be happier, move to a new place? Start
				with your vision board for the next 5 years.
			</p>

			<div className={classes['vision-board-container']}>
				<VisionBoard />
			</div>
		</section>
	);
};

export default StepNine;
