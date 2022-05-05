import React from 'react';

import classes from './SliderSteps.module.css';
const Dots = ({ currentStep }) => {
	return (
		<>
			<div className={classes['steps-info']}>
				<div>
					<h3>Step {currentStep} of 5</h3>
				</div>

				<div className={classes['dots']}>
					<div
						className={
							currentStep === '1'
								? `${classes.dot} ${classes.active}`
								: `${classes.dot}`
						}
					></div>
					<div
						className={
							currentStep === '2'
								? `${classes.dot} ${classes.active}`
								: `${classes.dot}`
						}
					></div>
					<div
						className={
							currentStep === '3'
								? `${classes.dot} ${classes.active}`
								: `${classes.dot}`
						}
					></div>
					<div
						className={
							currentStep === '4'
								? `${classes.dot} ${classes.active}`
								: `${classes.dot}`
						}
					></div>
					<div
						className={
							currentStep === '5'
								? `${classes.dot} ${classes.active}`
								: `${classes.dot}`
						}
					></div>
				</div>
			</div>
		</>
	);
};

export default Dots;
