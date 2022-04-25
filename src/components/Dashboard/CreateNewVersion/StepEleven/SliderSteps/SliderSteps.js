import React, { useState } from 'react';

import FiveSliders from '../../../UtilityComponents/FiveSliders/FiveSliders';

import classes from './SliderSteps.module.css';

import { slidersData } from '../../../../../data/slidersData';

const prevButtonText = '< PREVIOUS';

const SliderSteps = (props) => {
	debugger;
	const [currentSlider, setCurrentSlider] = useState(1);
	const [allSliders, setAllSliders] = useState(slidersData);

	const [firstStep, setFirstStep] = useState(true);
	const [secondStep, setSecondStep] = useState(false);
	const [thirdStep, setThirdStep] = useState(false);
	const [fourthStep, setFourthStep] = useState(false);
	const [fifthStep, setFifthStep] = useState(false);

	// saving values in State

	const nextHandler = (event) => {
		if (firstStep) {
			setSecondStep(true);
			setFirstStep(false);
			setCurrentSlider(2);
		} else if (secondStep) {
			setThirdStep(true);
			setSecondStep(false);
			setCurrentSlider(3);
		} else if (thirdStep) {
			setFourthStep(true);
			setThirdStep(false);
			setCurrentSlider(4);
		} else if (fourthStep) {
			setFifthStep(true);
			setFourthStep(false);
			setCurrentSlider(5);
		}
	};

	const prevHandler = (event) => {
		if (secondStep) {
			setFirstStep(true);
			setSecondStep(false);
			setCurrentSlider(1);
		} else if (thirdStep) {
			setSecondStep(true);
			setThirdStep(false);
			setCurrentSlider(2);
		} else if (fourthStep) {
			setThirdStep(true);
			setFourthStep(false);
			setCurrentSlider(3);
		} else if (fifthStep) {
			setFourthStep(true);
			setFifthStep(false);
			setCurrentSlider(4);
		}
	};

	const firstValuesHandler = (values) => {
		console.log(values);

		let prevSliders = allSliders;
		prevSliders[0].value = values.first;
		prevSliders[1].value = values.second;
		prevSliders[2].value = values.third;
		prevSliders[3].value = values.fourth;
		prevSliders[4].value = values.fifth;

		setAllSliders(prevSliders);
		console.log(allSliders);
	};

	const secondValuesHandler = (values) => {
		console.log(values);
	};

	const thirdValuesHandler = (values) => {
		console.log(values);
	};

	const fourthValuesHandler = (values) => {
		console.log(values);
	};

	const fifthValuesHandler = (values) => {
		console.log(values);
	};

	return (
		<section className={classes['slider-steps-container']}>
			<div className={classes['steps-info']}>
				<div>
					<h3>Step {currentSlider} of 5</h3>
				</div>

				<div className={classes['dots']}>
					<div
						className={
							firstStep ? `${classes.dot} ${classes.active}` : `${classes.dot}`
						}
					></div>
					<div
						className={
							secondStep ? `${classes.dot} ${classes.active}` : `${classes.dot}`
						}
					></div>
					<div
						className={
							thirdStep ? `${classes.dot} ${classes.active}` : `${classes.dot}`
						}
					></div>
					<div
						className={
							fourthStep ? `${classes.dot} ${classes.active}` : `${classes.dot}`
						}
					></div>
					<div
						className={
							fifthStep ? `${classes.dot} ${classes.active}` : `${classes.dot}`
						}
					></div>
				</div>
			</div>
			<div className={classes['slider-steps__content']}>
				{firstStep && (
					<FiveSliders
						first={allSliders[0]}
						second={allSliders[1]}
						third={allSliders[2]}
						fourth={allSliders[3]}
						fifth={allSliders[4]}
						onValues={firstValuesHandler}
					/>
				)}

				{secondStep && (
					<FiveSliders
						first={allSliders[5]}
						second={allSliders[6]}
						third={allSliders[7]}
						fourth={allSliders[8]}
						fifth={allSliders[9]}
						onValues={secondValuesHandler}
					/>
				)}
				{thirdStep && (
					<FiveSliders
						first={allSliders[10]}
						second={allSliders[11]}
						third={allSliders[12]}
						fourth={allSliders[13]}
						fifth={allSliders[14]}
						onValues={thirdValuesHandler}
					/>
				)}

				{fourthStep && (
					<FiveSliders
						first={allSliders[15]}
						second={allSliders[16]}
						third={allSliders[17]}
						fourth={allSliders[18]}
						fifth={allSliders[19]}
						onValuse={fourthValuesHandler}
					/>
				)}

				{fifthStep && (
					<FiveSliders
						first={allSliders[20]}
						second={allSliders[21]}
						third={allSliders[22]}
						fourth={allSliders[23]}
						fifth={allSliders[24]}
						onValues={fifthValuesHandler}
					/>
				)}
			</div>

			<div className={classes.actions}>
				<div
					className={firstStep ? `${classes.hidden}` : `{${classes.shown}}`}
					onClick={prevHandler}
				>
					{' '}
					{prevButtonText}
				</div>
				<div
					className={fifthStep ? `${classes.hidden}` : `{${classes.shown}}`}
					onClick={nextHandler}
				>
					{' '}
					NEXT >{' '}
				</div>
			</div>
		</section>
	);
};

export default SliderSteps;
