export const ACTIONS = {
	DROP_ON_LOW: 'drop_on_low',
	DROP_ON_MEDIUM: 'drop_on_medium',
	DROP_ON_HIGH: 'drop_on_high',
	DROP_ON_CRITICAL: 'drop_on_critical',
	DRAGGING: 'dragging',
	DATA_FROM_SERVER: 'data_from_server',
	DATA_FROM_STEP_ONE: 'data_from_step_one',
	SET_DATA_LOADING: 'set_data_loading',
};
export default function reducer(state, action) {
	let id = state.dragId;
	// let dragSrc = action.payload.dragSourceId;

	let prevState = { ...state };
	let issue = null;
	let data = null;

	if (action.type === ACTIONS.SET_DATA_LOADING) {
		state.dataLoading = false;
		state['low'] = [];
		state['medium'] = [];
		state['critical'] = [];
		state['high'] = [];

		return state;
	}
	if (action.type === ACTIONS.DATA_FROM_STEP_ONE) {
		data = action.payload.data;
		state = data;
		state.dataLoading = true;
		return state;
	}

	if (action.type === ACTIONS.DATA_FROM_SERVER) {
		state.low.length = 0;
		state.medium.length = 0;
		state.high.length = 0;
		state.critical.length = 0;

		data = action.payload.data;
		state['low'] = [];
		state['medium'] = [];
		state['critical'] = [];
		state['high'] = [];

		data.map((iss) => {
			if (iss.issueImpactType[0] === 'low') {
				state.low.push(iss);
			} else if (iss.issueImpactType[0] === 'high') {
				state.high.push(iss);
			} else if (iss.issueImpactType[0] === 'medium') {
				state.medium.push(iss);
			} else if (iss.issueImpactType[0] === 'critical') {
				state.critical.push(iss);
			}
		});

		state.low.map((iss) => {
			iss['id'] = iss._id;
		});
		state.medium.map((iss) => {
			iss['id'] = iss._id;
		});
		state.high.map((iss) => {
			iss['id'] = iss._id;
		});
		state.critical.map((iss) => {
			iss['id'] = iss._id;
		});

		state.dataLoading = true;
		return state;
	}

	if (action.type === ACTIONS.DRAGGING) {
		state.dragId = action.payload.dragId;
		state.dragSrcId = action.payload.dragSrcId;
		return state;
	}
	if (action.type === ACTIONS.DROP_ON_LOW) {
		if (state.dragSrcId === 2) {
			issue = prevState.medium.find((isu) => isu.id == id);
			prevState.medium = prevState.medium.filter((isu) => isu.id != id);
		} else if (state.dragSrcId === 3) {
			issue = prevState.high.find((isu) => isu.id == id);
			prevState.high = prevState.high.filter((isu) => isu.id != id);
		} else {
			issue = prevState.critical.find((isu) => isu.id == id);
			prevState.critical = prevState.critical.filter((isu) => isu.id != id);
		}
		prevState.low.push(issue);
		return prevState;
	} else if (action.type === ACTIONS.DROP_ON_MEDIUM) {
		if (state.dragSrcId === 3) {
			issue = prevState.high.find((isu) => isu.id == id);
			prevState.high = prevState.high.filter((isu) => isu.id != id);
		} else if (state.dragSrcId === 4) {
			issue = prevState.critical.find((isu) => isu.id == id);
			prevState.critical = prevState.critical.filter((isu) => isu.id != id);
		} else {
			issue = prevState.low.find((isu) => isu.id == id);
			prevState.low = prevState.low.filter((isu) => isu.id != id);
		}
		prevState.medium.push(issue);
		return prevState;
	} else if (action.type === ACTIONS.DROP_ON_HIGH) {
		if (state.dragSrcId === 2) {
			issue = prevState.medium.find((isu) => isu.id == id);
			prevState.medium = prevState.medium.filter((isu) => isu.id != id);
		} else if (state.dragSrcId === 4) {
			issue = prevState.critical.find((isu) => isu.id == id);
			prevState.critical = prevState.critical.filter((isu) => isu.id != id);
		} else {
			issue = prevState.low.find((isu) => isu.id == id);
			prevState.low = prevState.low.filter((isu) => isu.id != id);
		}
		prevState.high.push(issue);
		return prevState;
	} else if (action.type === ACTIONS.DROP_ON_CRITICAL) {
		if (state.dragSrcId === 2) {
			issue = prevState.medium.find((isu) => isu.id == id);
			prevState.medium = prevState.medium.filter((isu) => isu.id != id);
		} else if (state.dragSrcId === 3) {
			issue = prevState.high.find((isu) => isu.id == id);
			prevState.high = prevState.high.filter((isu) => isu.id != id);
		} else {
			issue = prevState.low.find((isu) => isu.id == id);
			prevState.low = prevState.low.filter((isu) => isu.id != id);
		}
		prevState.critical.push(issue);
		return prevState;
	} else {
		return state;
	}
}
