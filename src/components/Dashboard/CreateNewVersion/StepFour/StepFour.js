import React, { useState, useEffect, useReducer } from 'react';
import classes from './StepFour.module.css';
import uniqueId from 'lodash.uniqueid';

import StepFourStatic from './StepFourStatic';
import AddNewTag from './AddNewTag';
import Tag from '../../UI/Tag';

import reducer, { INITIAL_STATE, ACTIONS } from './reducer';

const StepFour = ({ onStateChange }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const addToSelected = (item) => {
		dispatch({
			type: ACTIONS.ADD_TO_SELECTED,
			payload: { data: item },
		});
	};

	const newTagHandler = () => {
		if (state.tagTitle.trim() === '') {
			return;
		}

		dispatch({
			type: ACTIONS.ADD_NEW_TAG,
			payload: { data: state.tagTitle },
		});
	};

	useEffect(() => {
		onStateChange(state);
	}, [state]);
	return (
		<section className={classes.stepFourOfEleven}>
			<StepFourStatic />
			<AddNewTag
				onNewTag={newTagHandler}
				onTitle={(event) =>
					dispatch({
						type: ACTIONS.CHANGE_TITLE,
						payload: { data: event.target.value },
					})
				}
				tagTitle={state.tagTitle}
			/>

			<br />

			<div className={classes.selectedTextArea}>
				{state.tags.length > 0 ? (
					state.tags.map((obj, i) => (
						<Tag
							key={obj.id}
							title={obj.title}
							id={obj.id}
							onClick={addToSelected}
						/>
					))
				) : (
					<div></div>
				)}
			</div>
		</section>
	);
};

export default StepFour;
