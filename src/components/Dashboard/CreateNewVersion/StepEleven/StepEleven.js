import React from 'react';
import classes from './StepEleven.module.css';

import { Step11ContextProvider } from '../../../../store/step-eleven';

import StepElevenStatic from './StepElevenStatic';
import SliderSteps from './SliderSteps/SliderSteps';
const StepEleven = ({ onStateChange }) => {
	return (
		<Step11ContextProvider>
			<section className={classes['step-eleven']}>
				<StepElevenStatic />

				<div className={classes['sliders']}>
					<SliderSteps onStateChange={onStateChange} />
				</div>
			</section>
		</Step11ContextProvider>
	);
};

export default StepEleven;
