import React, { useState, useEffect, useContext, useReducer } from 'react';
import { getIssues } from '../../../../api/steptwo';
import AuthContext from '../../../../store/auth-context';
import NewVersionContext from '../../../../store/new-version-context';

import reducer, { ACTIONS } from './reducer';

import './StepTwo.css';
import Feeling from './Feeling.js';
import FeelingCard from './FeelingCard.js';

import StepTwoStatic from './StepTwoStatic';

const EMPTY_ARRAY = [];

const FEELING_CARDS = [
	{
		title: 'Low Impact',
	},
	{
		title: 'Medium Impact',
	},
	{
		title: 'High Impact',
	},
	{
		title: 'Critical Impact',
	},
];

const issues = {
	low: [], ///issueImpact='low'
	medium: [], //issueImpactType='medium'
	high: [],
	critical: [],
	dragId: null,
	dragSrcId: null,
	dataLoading: true,
};

// actual functoin definition starts here
const StepTwo = (props) => {
	const authCtx = useContext(AuthContext);
	const newVerCtx = useContext(NewVersionContext);

	console.log('in steptwo');

	const [state, dispatch] = useReducer(reducer, issues);

	//props.onStateChange(state);

	useEffect(() => {
		props.onStateChange(state);
	}, [state, props.onStateChange]);

	console.log('local state always renders', state);

	const [dataIsLoading, setDataIsLoading] = useState(false);

	const [feelingCards, setFeelingCards] = useState(FEELING_CARDS);

	const [firstFeelings, setFirstFeelings] = useState(FEELING_CARDS[0].feelings);
	const [secondFeelings, setSecondFeelings] = useState(
		FEELING_CARDS[1].feelings
	);
	const [thirdFeelings, setThirdFeelings] = useState(FEELING_CARDS[2].feelings);
	const [fourthFeelings, setFourthFeelings] = useState(
		FEELING_CARDS[3].feelings
	);

	///////////////////////// DRAG & DROP FUNCTIONALITY HERE /////////////////////

	const dragStartHandler = (event) => {
		console.log('drag is started', event.target.parentNode.id);
		event.target.classList.add('dragging');

		if (event.target.parentNode.id == 4) {
			dispatch({
				type: ACTIONS.DRAGGING,
				payload: { dragId: event.target.id, dragSrcId: 4 },
			});
		}
		if (event.target.parentNode.id == 3) {
			dispatch({
				type: ACTIONS.DRAGGING,
				payload: { dragId: event.target.id, dragSrcId: 3 },
			});
		}
		if (event.target.parentNode.id == 2) {
			dispatch({
				type: ACTIONS.DRAGGING,
				payload: { dragId: event.target.id, dragSrcId: 2 },
			});
		}
		if (event.target.parentNode.id == 1) {
			dispatch({
				type: ACTIONS.DRAGGING,
				payload: { dragId: event.target.id, dragSrcId: 1 },
			});
		}
	};

	const dragEndHandler = (event) => {
		event.target.classList.remove('dragging');
	};

	const dropHandler = (event) => {
		event.preventDefault();

		newVerCtx.stepOneUnSaver();

		if (event.target.id == 1) {
			if (state.dragSrcId == 1) {
				return;
			}

			dispatch({
				type: ACTIONS.DROP_ON_LOW,
				payload: { id: event.target.id },
			});
		} else if (event.target.id == 2) {
			if (state.dragSrcId == 2) {
				return;
			}
			dispatch({
				type: ACTIONS.DROP_ON_MEDIUM,
				payload: { id: event.target.id },
			});
		} else if (event.target.id == 3) {
			if (state.dragSrcId == 3) {
				return;
			}

			dispatch({
				type: ACTIONS.DROP_ON_HIGH,
				payload: { id: event.target.id },
			});
		} else if (event.target.id == 4) {
			if (state.dragSrcId == 4) {
				return;
			}
			dispatch({
				type: ACTIONS.DROP_ON_CRITICAL,
				payload: { id: event.target.id },
			});
		}

		// passing state
		//newVerCtx.stepTwoIssuesModifier(state);
	};

	const allowDrop = (event) => {
		//console.log('dragging over element');
		event.preventDefault();
	};

	////////////////////////// END DRAG & DROP FUNCTIONALITY HERE ////////////

	useEffect(() => {
		console.log('in useffect 1');
		// data data from server
		(async function () {
			//newVerCtx.stepTwoClearer();
			console.log('in useeffect 2');
			dispatch({ type: ACTIONS.SET_DATA_LOADING });

			let response = await getIssues(newVerCtx.versionId);
			//setDataIsLoading(false);

			console.log('in user effect 3');

			if (response.success && response.data.length > 0) {
				console.log('data', response.data);
				dispatch({
					type: ACTIONS.DATA_FROM_SERVER,
					payload: { data: response.data },
				});
			} else {
				// working with local data

				const issues = {
					low: [
						{
							issueTitle: `${newVerCtx.stepOneFirst}`,
							issueImpactType: 'low',
							id: '1',
						},
					],
					medium: [
						{
							issueTitle: `${newVerCtx.stepOneSecond}`,
							issueImpactType: 'medium',
							id: '2',
						},
					],
					high: [
						{
							issueTitle: `${newVerCtx.stepOneThird}`,
							issueImpactType: 'high',
							id: '3',
						},
					],
					critical: [
						{
							issueTitle: `${newVerCtx.stepOneFourth}`,
							issueImpactType: 'critical',
							id: '4',
						},
					],

					dragId: null,
					dragSrcId: null,
				};

				dispatch({
					type: ACTIONS.DATA_FROM_STEP_ONE,
					payload: { data: issues },
				});
			}
		})();
	}, []);

	return (
		<section className='stepTwoOfEleven'>
			<StepTwoStatic />

			<div className='feelings-cards-container'>
				<div className='feeling-card' id='1'>
					<div className='feeling-card__title'>{feelingCards[0].title}</div>

					<FeelingCard
						id='1'
						key={1}
						feelings={state.dataLoading ? EMPTY_ARRAY : state.low}
						onDragStart={dragStartHandler}
						onDragEnd={dragEndHandler}
						onDragOver={allowDrop}
						onDrop={dropHandler}
						isLoading={dataIsLoading}
					/>
				</div>
				<div className='feeling-card' id='2'>
					<div className='feeling-card__title'>{feelingCards[1].title}</div>
					<FeelingCard
						id='2'
						key={2}
						feelings={state.dataLoading ? EMPTY_ARRAY : state.medium}
						onDragStart={dragStartHandler}
						onDragEnd={dragEndHandler}
						onDragOver={allowDrop}
						onDrop={dropHandler}
						isLoading={dataIsLoading}
					/>
				</div>

				<div className='feeling-card' id='3'>
					<div className='feeling-card__title'>{feelingCards[2].title}</div>
					<FeelingCard
						id='3'
						key={3}
						feelings={state.dataLoading ? EMPTY_ARRAY : state.high}
						onDragStart={dragStartHandler}
						onDragEnd={dragEndHandler}
						onDragOver={allowDrop}
						onDrop={dropHandler}
						isLoading={dataIsLoading}
					/>
				</div>

				<div className='feeling-card' id='4'>
					<div className='feeling-card__title'>{feelingCards[3].title}</div>
					<FeelingCard
						id='4'
						key={4}
						feelings={state.dataLoading ? EMPTY_ARRAY : state.critical}
						onDragStart={dragStartHandler}
						onDragEnd={dragEndHandler}
						onDragOver={allowDrop}
						onDrop={dropHandler}
						isLoading={dataIsLoading}
					/>
				</div>
			</div>
		</section>
	);
};

export default StepTwo;
