import React, { useEffect, useState, useContext } from 'react';

// for API call
import { createIssues } from '../../api/steptwo.js';
import { createFeelings, getFeelings } from '../../api/stepthree';

//context
import NewVersionContext from '../../store/new-version-context.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Introduction from './CreateNewVersion/Introduction/Introduction.js';
import StepOne from './CreateNewVersion/StepOne/StepOne.js';
import StepTwo from './CreateNewVersion/StepTwo/StepTwo';
import StepThree from './CreateNewVersion/StepThree/StepThree.js';
import StepFour from './CreateNewVersion/StepFour/StepFour.js';
import StepFive from './CreateNewVersion/StepFive/StepFive.js';
import StepSix from './CreateNewVersion/StepSix/StepSix.js';
import StepSeven from './CreateNewVersion/StepSeven/StepSeven.js';
import StepEight from './CreateNewVersion/StepEight/StepEight.js';
import StepNine from './CreateNewVersion/StepNine/StepNine.js';
import StepTen from './CreateNewVersion/StepTen/StepTen.js';
import StepEleven from './CreateNewVersion/StepEleven/StepEleven.js';
import Results from './CreateNewVersion/Results/Results.js';

import './MyProgress.css';

const MyProgress = () => {
	const newVerCtx = useContext(NewVersionContext);
	const previousButton = document.querySelector('buttonPrevious');
	const saveButton = document.querySelector('buttonSave');
	const tab = document.querySelector('tab');
	const progressStep = document.querySelector('progressStep');
	const progressStepActive = document.querySelector('progressStep-Active');
	const progressStepDone = document.querySelector('progressStep-Done');

	const [sendingRequest, setSendingRequest] = useState(false);
	const [saveButtonText, setSaveButtonText] = useState('Save & Continue');

	const [checkClassName, setCheckClassName] = useState('');

	// states for StepTwo Components (issues)

	const [stepTwoState, setStepTwoState] = useState({});

	// states for StepThree Components (feelings)

	const [stepThreeState, setStepThreeState] = useState({});

	// states for firstStep

	//functions for set StepOne Component

	// const firstValueHandler = (val) => {
	// 	newVerCtx.stepOneFirstHandler(val);
	// };
	// const secondValueHandler = (val) => {
	// 	newVerCtx.stepOneSecondHandler(val);
	// };

	// const thirdValueHandler = (val) => {
	// 	newVerCtx.stepOneThirdHandler(val);
	// };

	// functions for StepTwo Component

	/*
		console.log('low', lowImpIssues);

		console.log('medium', mediumImpIssues);
		console.log('high', highImpIssues);
		console.log('critical', criticalImpIssues);

		*/
	let [formStep, setFormStep] = useState(1);

	const [activeClassNames, setActiveClassNames] = useState({
		intro: 'progressStep progressStep-Active',
		first: 'progressStep',
		second: 'progressStep',
		third: 'progressStep',
		fourth: 'progressStep',
		fifth: 'progressStep',
		sixth: 'progressStep',
		seventh: 'progressStep',
		eigth: 'progressStep',
		nine: 'progressStep',
		ten: 'progressStep',
		eleven: 'progressStep',
	});

	const prevHandler = () => {
		if (formStep === 12) {
			setSaveButtonText('See Results');
		} else {
			setSaveButtonText('Save & Continue');
		}
		setFormStep(parseInt(formStep) - 1);
	};

	const nextHandler = async () => {
		setSaveButtonText('Save & Continue');

		// save bit for stepOne
		if (formStep === 2) {
			newVerCtx.stepOneSaver();
		}

		// for saving data to 'steptwos' collection

		if (formStep === 3) {
			// format request body;

			stepTwoState.low.map((iss) => {
				iss['issueImpactType'] = 'low';
			});
			stepTwoState.medium.map((iss) => {
				iss['issueImpactType'] = 'medium';
			});

			stepTwoState.high.map((iss) => {
				iss['issueImpactType'] = 'high';
			});

			stepTwoState.critical.map((iss) => {
				iss['issueImpactType'] = 'critical';
			});

			let requestBody = {
				issues: [
					...stepTwoState.low,
					...stepTwoState.medium,
					...stepTwoState.high,
					...stepTwoState.critical,
				],
			};

			setSaveButtonText('Please wait...');

			console.log('step two state in my progressjs', stepTwoState);

			const response = await createIssues(newVerCtx.versionId, requestBody);

			console.log('data from server', response.data);

			setSaveButtonText('Save & Continue');
		} else if (formStep === 4) {
			console.log('step Three State', stepThreeState);

			setSaveButtonText('Please wait...');
			const response = await createFeelings(
				newVerCtx.versionId,
				stepThreeState
			);
			setSaveButtonText('Save & Continue');

			if (response.success == false) {
				setSaveButtonText('try again');
				return;
			}
			console.log('data from Server For Step Three', response.data);
		} else if (formStep === 12) {
			setSaveButtonText('See Results');
		}

		setFormStep(parseInt(formStep) + 1);
	};

	const stateChangeHandler = (state) => {
		console.log('step two state in my progress.js');
		setStepTwoState(state);
	};
	const stepsHandler = (event) => {
		// for StepOne Values

		if (event.target.id == 12) {
			setSaveButtonText('See Results');
		} else {
			setSaveButtonText('Save & Continue');
		}
		setFormStep(parseInt(event.target.id));
	};

	console.log('formStemp', formStep);

	return (
		<main className='Body'>
			<section className='sectionOne'>
				<h5 className='progress'>MY PROGRESS</h5>

				<div className='progressbar'>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 1
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								id='showStep1'
								style={{
									backgroundColor: `${formStep > 1 ? 'white' : ''}`,
								}}
							>
								{formStep > 1 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='1' className='step-text'>
								Introduction
							</div>
							<div>My Therapy Tool Introduction</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 2
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								id='showStep2'
								style={{
									backgroundColor: `${formStep > 2 ? 'white' : ''}`,
								}}
							>
								{formStep > 2 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='2' className='step-text'>
								Step 1 of 11
							</div>
							<div>What is bothering you?</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 3
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								style={{
									backgroundColor: `${formStep > 3 ? 'white' : ''}`,
								}}
							>
								{formStep > 3 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='3' className='step-text'>
								Step 2 of 11
							</div>
							<div>
								Prioritize the issues from step one in <br />
								The Threat Level Matrix
							</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 4
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								style={{
									backgroundColor: `${formStep > 4 ? 'white' : ''}`,
								}}
							>
								{formStep > 4 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='4' className='step-text'>
								Step 3 of 11
							</div>
							<div>Identify and eliminate non-productive coping methods</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 5
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								style={{
									backgroundColor: `${formStep > 5 ? 'white' : ''}`,
								}}
							>
								{formStep > 5 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='5' className='step-text'>
								Step 4 of 11
							</div>
							<div>
								Identify and eliminate non productive <br />
								{/* Replace non productive coping methods with "Main Time Tools" */}
							</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 6
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								style={{
									backgroundColor: `${formStep > 6 ? 'white' : ''}`,
								}}
							>
								{formStep > 6 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='6' className='step-text'>
								Step 5 of 11
							</div>
							<div>Take Action.</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 7
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								style={{
									backgroundColor: `${formStep > 7 ? 'white' : ''}`,
								}}
							>
								{formStep > 7 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='7' className='step-text'>
								Step 6 of 11
							</div>
							<div>Reach Out: Loneliness and connections.</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 8
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								style={{
									backgroundColor: `${formStep > 8 ? 'white' : ''}`,
								}}
							>
								{formStep > 8 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='8' className='step-text'>
								Step 7 of 11
							</div>
							<div>Identify and eliminate 'The Monkey Mind'</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 9
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								style={{
									backgroundColor: `${formStep > 9 ? 'white' : ''}`,
								}}
							>
								{formStep > 9 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='9' className='step-text'>
								Step 8 of 11
							</div>
							<div>Practice Gratitude and Faith</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 10
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								style={{
									backgroundColor: `${formStep > 10 ? 'white' : ''}`,
								}}
							>
								{formStep > 10 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='10' className='step-text'>
								Step 9 of 11
							</div>
							<div>Create a Vision Board of goals and dreams</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 11
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
								style={{
									backgroundColor: `${formStep > 11 ? 'white' : ''}`,
								}}
							>
								{formStep > 11 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='11' className='step-text'>
								Step 10 of 11
							</div>
							<div>
								Write down and review your Life Rules.
								<br />
								Breakthroughs and Realizations.
							</div>
						</div>
					</div>
					<div className='inlineProgress'>
						<div>
							<div
								className={
									formStep == 12 || formStep == 13
										? 'progressStep progressStep-Active'
										: 'progressStep'
								}
							>
								{formStep > 12 && <FontAwesomeIcon icon='fa-solid fa-check' />}
							</div>
						</div>
						<div>
							<div onClick={stepsHandler} id='12' className='step-text'>
								Step 11 of 11
							</div>
							<div>Monitor Progress with your personal setting.</div>
						</div>
					</div>
				</div>
			</section>
			<section className='sectionTwo'>
				{/* <div>{arrayOfSteps[formStep]}</div> */}

				{formStep === 1 && <Introduction />}
				{formStep === 2 && <StepOne />}
				{formStep === 3 && <StepTwo onStateChange={stateChangeHandler} />}
				{formStep === 4 && (
					<StepThree onStateChange={(state) => setStepThreeState(state)} />
				)}
				{formStep === 5 && <StepFour />}
				{formStep === 6 && <StepFive />}
				{formStep === 7 && <StepSix />}
				{formStep === 8 && <StepSeven />}
				{formStep === 9 && <StepEight />}
				{formStep === 10 && <StepNine />}
				{formStep === 11 && <StepTen />}
				{formStep === 12 && <StepEleven />}

				<div className='prevOrSave'>
					<button className='buttonPrevious' onClick={() => prevHandler()}>
						Previous
					</button>
					<button className='buttonSave' onClick={() => nextHandler()}>
						{saveButtonText}
					</button>
				</div>
			</section>
		</main>
	);
};

export default MyProgress;
