import React, { useState, useReducer } from 'react';
import StepSixAdd from './StepSixAdd';
import './StepSix.css';

import uniqueId from 'lodash.uniqueid';
import StepSixStatic from './StepSixStatic';

import reducer, { initialState, ACTIONS } from './reducer';

const StepSix = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<section className='sectionReachOut'>
			<StepSixStatic />

			<div className='add'>
				<div>
					<button
						onClick={dispatch({
							type: ACTIONS.ADD_CONTACT,
						})}
						className='AddMore'
					>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div>
			</div>
		</section>
	);
};

export default StepSix;
