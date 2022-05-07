import React, {
	useRef,
	useState,
	useEffect,
	useReducer,
	useContext,
} from 'react';
import Step11Context from '../../../../../store/step-eleven';
import FiveSliders from '../../../UtilityComponents/FiveSliders/FiveSliders';

import classes from './SliderSteps.module.css';

import { slidersData } from '../../../../../data/slidersData';
import { initialState, ACTIONS } from './reducer';
import Dots from './Dots';

const prevButtonText = '< PREVIOUS';

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
			break;

		case ACTIONS.VALUES:
			//prevState.firstValues = [];
			// prevState.secondValues = [];
			// prevState.thirdValues = [];
			// prevState.fourthValues = [];
			// prevState.fifthValues = [];

			switch (action.payload.step) {
				case '1':
					prevState.firstValues.map((sliderV) => {
						if (sliderV.id === action.payload.sliderID) {
							sliderV.value = action.payload.value;
						}
					});

					break;
				case '2':
					prevState.secondValues.map((sliderV) => {
						if (sliderV.id === action.payload.sliderID) {
							sliderV.value = action.payload.value;
						}
					});
					break;
				case '3':
					prevState.thirdValues.map((sliderV) => {
						if (sliderV.id === action.payload.sliderID) {
							sliderV.value = action.payload.value;
						}
					});
					break;
				case '4':
					prevState.fourthValues.map((sliderV) => {
						if (sliderV.id === action.payload.sliderID) {
							sliderV.value = action.payload.value;
						}
					});
					break;
				case '5':
					prevState.fifthValues.map((sliderV) => {
						if (sliderV.id === action.payload.sliderID) {
							sliderV.value = action.payload.value;
						}
					});
					break;
				default:
				//
			}
			break;
		case ACTIONS.DOT_CLICK:
			if (prevState.currentStep == action.payload.step) return prevState;
			prevState.currentStep = action.payload.step;
			if (action.payload.step != '1') {
				prevState.showPrevBtn = true;
			} else {
				prevState.showPrevBtn = false;
			}

			if (action.payload.step == '5') {
				prevState.showNextBtn = false;
			} else {
				prevState.showNextBtn = true;
			}
			break;
		default:
		// do nothing..
	}

	return prevState;
};

const SliderSteps = (props) => {
	const [myState, disptach] = useReducer(reducer, initialState);

	const s11Ctx = useContext(Step11Context);

	const prevHandler = () => {
		switch (myState.currentStep) {
			case '1':
				s11Ctx.onStateChange(myState.firstValues, '1');
				break;
			case '2':
				s11Ctx.onStateChange(myState.secondValues, '2');
				break;
			case '3':
				s11Ctx.onStateChange(myState.thirdValues, '3');
				break;
			case '4':
				s11Ctx.onStateChange(myState.fourthValues, '4');
				break;
			default:
				s11Ctx.onStateChange(myState.fifthValues, '5');
		}

		disptach({
			type: ACTIONS.PREV,
		});
	};
	const nextHandler = () => {
		switch (myState.currentStep) {
			case '1':
				s11Ctx.onStateChange(myState.firstValues, '1');
				break;
			case '2':
				s11Ctx.onStateChange(myState.secondValues, '2');
				break;
			case '3':
				s11Ctx.onStateChange(myState.thirdValues, '3');
				break;
			case '4':
				s11Ctx.onStateChange(myState.fourthValues, '4');
				break;
			default:
				s11Ctx.onStateChange(myState.fifthValues, '5');
		}
		disptach({
			type: ACTIONS.NEXT,
		});
	};

	return (
		<section className={classes['slider-steps-container']}>
			<Dots
				currentStep={myState.currentStep}
				onDotClick={(stepNumber) => {
					disptach({
						type: ACTIONS.DOT_CLICK,
						payload: { step: stepNumber },
					});
				}}
			/>
			<div className={classes['slider-steps__content']}>
				{myState.currentStep === '1' && (
					<FiveSliders
						id='1'
						// first={myState.firstValues[0]}
						// second={myState.firstValues[1]}
						// third={myState.firstValues[2]}
						// fourth={myState.firstValues[3]}
						// fifth={myState.firstValues[4]}
						values={
							s11Ctx.step1Sliders == null
								? myState.firstValues
								: s11Ctx.step1Sliders
						}
						onValues={(value, sliderID) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { value: value, step: '1', sliderID: sliderID },
							});
						}}
						//onValues={firstValuseHandler}
					/>
				)}

				{myState.currentStep === '2' && (
					<FiveSliders
						id='2'
						// first={myState.secondValues[0]}
						// second={myState.secondValues[1]}
						// third={myState.secondValues[2]}
						// fourth={myState.secondValues[3]}
						// fifth={myState.secondValues[4]}
						values={
							s11Ctx.step2Sliders == null
								? myState.secondValues
								: s11Ctx.step2Sliders
						}
						onValues={(value, sliderID) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { value: value, step: '2', sliderID: sliderID },
							});
						}}
					/>
				)}
				{myState.currentStep === '3' && (
					<FiveSliders
						id='3'
						// first={myState.thirdValues[0]}
						// second={myState.thirdValues[1]}
						// third={myState.thirdValues[2]}
						// fourth={myState.thirdValues[3]}
						// fifth={myState.thirdValues[4]}
						values={
							s11Ctx.step3Sliders == null
								? myState.thirdValues
								: s11Ctx.step3Sliders
						}
						onValues={(value, sliderID) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { value: value, step: '3', sliderID: sliderID },
							});
						}}
					/>
				)}

				{myState.currentStep === '4' && (
					<FiveSliders
						id='4'
						// first={myState.fourthValues[0]}
						// second={myState.fourthValues[1]}
						// third={myState.fourthValues[2]}
						// fourth={myState.fourthValues[3]}
						// fifth={myState.fourthValues[4]}
						values={
							s11Ctx.step4Sliders == null
								? myState.fourthValues
								: s11Ctx.step4Sliders
						}
						onValues={(value, sliderID) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { value: value, step: '4', sliderID: sliderID },
							});
						}}
					/>
				)}

				{myState.currentStep === '5' && (
					<FiveSliders
						id='5'
						// first={myState.fifthValues[0]}
						// second={myState.fifthValues[1]}
						// third={myState.fifthValues[2]}
						// fourth={myState.fifthValues[3]}
						// fifth={myState.fifthValues[4]}
						values={
							s11Ctx.step5Sliders == null
								? myState.fifthValues
								: s11Ctx.step5Sliders
						}
						onValues={(value, sliderID) => {
							disptach({
								type: ACTIONS.VALUES,
								payload: { value: value, step: '5', sliderID: sliderID },
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
					onClick={prevHandler}
				>
					{' '}
					{prevButtonText}
				</div>
				<div
					className={
						!myState.showNextBtn ? `${classes.hidden}` : `{${classes.shown}}`
					}
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
