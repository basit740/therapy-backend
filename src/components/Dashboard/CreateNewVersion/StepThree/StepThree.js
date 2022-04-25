import React, { useContext, useReducer } from 'react';
import NewVersionContext from '../../../../store/new-version-context';
import StepThreeAdd from './StepThreeAdd';

// Reducer
import reducer, { initialState, ACTIONS } from './reducer';



function StepThree({ onStateChange }) {
	const newVerCtx = useContext(NewVersionContext);

	const [state, dispatch] = useReducer(reducer, initialState);

	const firstHabitHandler = (value) => {
		dispatch({ type: ACTIONS.ON_FIRST_HABIT, payload: { data: value } });
		// newVerCtx.stepThreeFeelingsModifier(state);
		onStateChange(state);
	};
	const secondHabitHandler = (value) => {
		dispatch({ type: ACTIONS.ON_SECOND_HABIT, payload: { data: value } });
		// newVerCtx.stepThreeFeelingsModifier(state);
		onStateChange(state);
	};
	const thirdHabitHandler = (value) => {
		dispatch({ type: ACTIONS.ON_THIRD_HABIT, payload: { data: value } });
		// newVerCtx.stepThreeFeelingsModifier(state);
		onStateChange(state);
	};

	const firstReflectionHandler = (value) => {
		dispatch({ type: ACTIONS.ON_FIRST_REFLECTION, payload: { data: value } });
		// newVerCtx.stepThreeFeelingsModifier(state);
		onStateChange(state);
	};
	const secondReflectionHandler = (value) => {
		dispatch({ type: ACTIONS.ON_SECOND_REFLECTION, payload: { data: value } });
		// newVerCtx.stepThreeFeelingsModifier(state);
		onStateChange(state);
	};
	const thirdReflectionHandler = (value) => {
		dispatch({ type: ACTIONS.ON_THIRD_REFLECTION, payload: { data: value } });
		// newVerCtx.stepThreeFeelingsModifier(state);
		onStateChange(state);
	};

	return (
		<section className='stepThreeOfEleven'>
			<h2>Identify and eliminate non-productive coping methods.</h2>
			<p>
				The things that bother you con have a negative impact on your
				well-being, and may make things seem worse than they are. You may get
				more stressed, or feel down or angrier than the situation seems to
				warrant and these may trigger harmful actions or emotions that are
				probably putting you in an even worse frame of mind. These are the
				things that we know are not good for us, but we turn to them anyway as
				non-productive coping mechanisms. Some examples: I drink a lot; I smoke
				a lot; I overeat: I am angry a lot of the time.
			</p>
			<p>
				What are your non-productive go to tools? Go ahead and list the things
				you do that are not productive, and also reflect on how they make you
				feel afterwards.
			</p>

			{/* {identifyMethods.length > 0 ? (
				identifyMethods.map((i) => <StepThreeAdd i={i} />)
			) : (
				<div></div>
			)} */}

			<StepThreeAdd
				onHabit={firstHabitHandler}
				onReflection={firstReflectionHandler}
			/>
			<StepThreeAdd
				onHabit={secondHabitHandler}
				onReflection={secondReflectionHandler}
			/>
			<StepThreeAdd
				onHabit={thirdHabitHandler}
				onReflection={thirdReflectionHandler}
			/>
		</section>
	);
}

export default StepThree;
