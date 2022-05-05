import React from 'react';
import classes from './StepEleven.module.css';

import StepElevenStatic from './StepElevenStatic';
import SliderSteps from './SliderSteps/SliderSteps';
const StepEleven = () => {
	return (
		<section className={classes['step-eleven']}>
			<StepElevenStatic />

			<div className={classes['sliders']}>
				<SliderSteps />
			</div>
		</section>
	);
};

export default StepEleven;
