import React, { useContext, useEffect, useReducer } from 'react';
import NewVersionContext from '../../../../store/new-version-context';
import StepThreeAdd from './StepThreeAdd';

import { getFeelings } from '../../../../api/stepthree';

// Reducer
import reducer, { initialState, ACTIONS } from './reducer';
import StepThreeStatic from './StepThreeStatic';

function StepThree({ onStateChange }) {
	const newVerCtx = useContext(NewVersionContext);

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		console.log('useEffect 1', state);
		onStateChange(state);
	}, [state]);

	useEffect(() => {
		console.log('useEffect 2', state);
		(async () => {
			const response = await getFeelings(newVerCtx.versionId);

			if (response.success && response.data.length > 0) {
				dispatch({
					type: ACTIONS.DATA_FROM_SERVER,
					payload: { data: response.data },
				});
			} else {
				dispatch({
					type: ACTIONS.DATA_FROM_GLOBAL_STATE,
					payload: { data: initialState },
				});
			}
			console.log('useEffect 3', state);
		})();
	}, []);

	return (
		<section className='stepThreeOfEleven'>
			<StepThreeStatic />

			<StepThreeAdd
				habit={state.feelings[0].feelingContent}
				reflection={state.feelings[0].feelingReflection}
				onHabit={(value) =>
					dispatch({ type: ACTIONS.ON_FIRST_HABIT, payload: { data: value } })
				}
				onReflection={(value) =>
					dispatch({
						type: ACTIONS.ON_FIRST_REFLECTION,
						payload: { data: value },
					})
				}
			/>
			<StepThreeAdd
				habit={state.feelings[1].feelingContent}
				reflection={state.feelings[1].feelingReflection}
				onHabit={(value) => {
					dispatch({ type: ACTIONS.ON_SECOND_HABIT, payload: { data: value } });
				}}
				onReflection={(value) =>
					dispatch({
						type: ACTIONS.ON_SECOND_REFLECTION,
						payload: { data: value },
					})
				}
			/>
			<StepThreeAdd
				habit={state.feelings[2].feelingContent}
				reflection={state.feelings[2].feelingReflection}
				onHabit={(value) =>
					dispatch({
						type: ACTIONS.ON_THIRD_HABIT,
						payload: { data: value },
					})
				}
				onReflection={(value) =>
					dispatch({
						type: ACTIONS.ON_THIRD_REFLECTION,
						payload: { data: value },
					})
				}
			/>
		</section>
	);
}

export default StepThree;
