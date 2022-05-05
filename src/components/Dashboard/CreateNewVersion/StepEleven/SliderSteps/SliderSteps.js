import React, { useRef, useState, useReducer } from 'react';

import FiveSliders from '../../../UtilityComponents/FiveSliders/FiveSliders';

import classes from './SliderSteps.module.css';

import { slidersData } from '../../../../../data/slidersData';
import Dots from './Dots';

const prevButtonText = '< PREVIOUS';

const ACTIONS = {
	NEXT: 'next',
	PREV: 'prev',
	FIRST_VALUES: 'first_values',
	SECOND_VALUES: 'second_values',
	THIRD_VALUES: 'third_values',
	FOURTH_VALUES: 'fourth_values',
	FIFTH_VALUES: 'fifth_values',
	VALUES: 'values',
};
const initialState = {
	currentStep: '1',
	showNextBtn: true,
	showPrevBtn: false,
	firstValues: [],
	secondValues: [],
	thirdValues: [],
	fourthValues: [],
	fifthValues: [],
};

const reducer = (state, action) => {
	const prevState = { ...state };

	switch (action.type) {
		case ACTIONS.NEXT:
			switch (prevState.currentStep) {
				case '1':
					prevState.currentStep = '2';
					prevState.showPrevBtn = true;
					break;
				case '2':
					prevState.currentStep = '3';
					break;
				case '3':
					prevState.currentStep = '4';
					break;
				case '4':
					prevState.currentStep = '5';
					prevState.showNextBtn = false;

				default:
				// do nothing
			}
			break;

		case ACTIONS.PREV:
			switch (prevState.currentStep) {
				case '2':
					prevState.currentStep = '1';
					prevState.showPrevBtn = false;
					prevState.showNextBtn = true;
					break;
				case '3':
					prevState.currentStep = '2';
					break;
				case '4':
					prevState.currentStep = '3';
					//prevState.showNextBtn = false;
					break;
				case '5':
					prevState.currentStep = '4';
					//prevState.showPrevBtn = false;
					prevState.showNextBtn = true;

				default:
				// do nothing
			}

		case ACTIONS.VALUES:
			prevState.firstValues = [];
			prevState.secondValues = [];
			prevState.thirdValues = [];
			prevState.fourthValues = [];
			prevState.fifthValues = [];
			switch (action.payload.step) {
				case '1':
					prevState.firstValues = action.payload.values;

					break;
				case '2':
					prevState.secondValues = action.payload.values;
					break;
				case '3':
					prevState.thirdValues = action.payload.values;
					break;
				case '4':
					prevState.fourthValues = action.payload.values;
					break;
				case '5':
					prevState.fifthValues = action.payload.values;
					break;
				default:
				//
			}

		default:
		// do nothing..
	}

	return prevState;
};

const SliderSteps = (props) => {
	const [myState, disptach] = useReducer(reducer, initialState);

	const [allSliders, setAllSliders] = useState(slidersData);

	return (
		<section className={classes['slider-steps-container']}>
			<Dots currentStep={myState.currentStep} />
			<div className={classes['slider-steps__content']}>
				{myState.currentStep === '1' && (
					<FiveSliders
						first={allSliders[0]}
						second={allSliders[1]}
						third={allSliders[2]}
						fourth={allSliders[3]}
						fifth={allSliders[4]}
						onValues={(value) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { values: value, step: '1' },
							});
						}}
					/>
				)}

				{myState.currentStep === '2' && (
					<FiveSliders
						first={allSliders[5]}
						second={allSliders[6]}
						third={allSliders[7]}
						fourth={allSliders[8]}
						fifth={allSliders[9]}
						onValues={(value) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { values: value, step: '2' },
							});
						}}
					/>
				)}
				{myState.currentStep === '3' && (
					<FiveSliders
						first={allSliders[10]}
						second={allSliders[11]}
						third={allSliders[12]}
						fourth={allSliders[13]}
						fifth={allSliders[14]}
						onValues={(value) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { values: value, step: '3' },
							});
						}}
					/>
				)}

				{myState.currentStep === '4' && (
					<FiveSliders
						first={allSliders[15]}
						second={allSliders[16]}
						third={allSliders[17]}
						fourth={allSliders[18]}
						fifth={allSliders[19]}
						onValues={(value) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { values: value, step: '4' },
							});
						}}
					/>
				)}

				{myState.currentStep === '5' && (
					<FiveSliders
						first={allSliders[20]}
						second={allSliders[21]}
						third={allSliders[22]}
						fourth={allSliders[23]}
						fifth={allSliders[24]}
						onValues={(value) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { values: value, step: '5' },
							});
						}}
					/>
				)}
			</div>

			<div className={classes.actions}>
				<div
					className={
						!myState.showPrevBtn ? `${classes.hidden}` : `{${classes.shown}}`
					}
					onClick={() => {
						disptach({ type: ACTIONS.PREV });
					}}
				>
					{' '}
					{prevButtonText}
				</div>
				<div
					className={
						!myState.showNextBtn ? `${classes.hidden}` : `{${classes.shown}}`
					}
					onClick={() => {
						disptach({ type: ACTIONS.NEXT });
					}}
				>
					{' '}
					NEXT >{' '}
				</div>
			</div>
		</section>
	);
};

export default SliderSteps;
