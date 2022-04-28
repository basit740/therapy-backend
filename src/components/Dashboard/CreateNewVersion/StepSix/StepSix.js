import React, { useState, useReducer, useEffect, useContext } from 'react';
import NewVersionContext from '../../../../store/new-version-context';
import StepSixAdd from './StepSixAdd';
import './StepSix.css';
import StepSixStatic from './StepSixStatic';

import uniqueId from 'lodash.uniqueid';
import reducer, { ACTIONS, initialState } from './reducer';
import { getContacts } from '../../../../api/stepSix';

const StepSix = ({ onStateChange }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const newVerCtx = useContext(NewVersionContext);
	const enterText = (event) => {
		dispatch({
			type: ACTIONS.ENTER_TEXT,
			payload: {
				id: event.target.id,
				value: event.target.value,
			},
		});
	};

	const addContact = () => {
		dispatch({
			type: ACTIONS.ADD_CONTACT,
		});
	};

	useEffect(() => {
		onStateChange(state);
	}, [state]);

	useEffect(() => {
		(async () => {
			const response = await getContacts(newVerCtx.versionId);
			if (response.success && response.data.length > 0) {
				dispatch({
					type: ACTIONS.DATA_FROM_SERVER,
					payload: {
						data: response.data,
					},
				});
			} else {
				dispatch({
					type: ACTIONS.DATA_FROM_LOCAL_STATE,
				});
			}
		})();
	}, []);
	return (
		<section className='sectionReachOut'>
			<StepSixStatic />

			{state.contacts.map((ct, index) => {
				return (
					<StepSixAdd
						id={ct.id}
						key={ct.id}
						number={index + 1}
						value={ct.contactDetail}
						onChange={enterText}
					/>
				);
			})}

			<div></div>

			<div className='add'>
				<div>
					<button className='AddMore' onClick={addContact}>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div>
			</div>
		</section>
	);
};

export default StepSix;
