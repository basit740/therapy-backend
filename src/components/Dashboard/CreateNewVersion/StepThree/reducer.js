export const ACTIONS = {
	ON_FIRST_HABIT: 'on_first_habit',
	ON_SECOND_HABIT: 'on_second_habit',
	ON_THIRD_HABIT: 'on_third_habit',
	ON_FIRST_REFLECTION: 'on_first_reflection',
	ON_SECOND_REFLECTION: 'on_second_reflection',
	ON_THIRD_REFLECTION: 'on_third_reflection',
};
export const initialState = {
	feelings: [
		{ id: 1, feelingContent: '', feelingReflection: '' },
		{ id: 2, feelingContent: '', feelingReflection: '' },
		{ id: 3, feelingContent: '', feelingReflection: '' },
	],
};

export default function reducer(state, action) {
	let type = action.type;
	let value = action.payload.data;

	switch (type) {
		case ACTIONS.ON_FIRST_HABIT:
			state.feelings[0].feelingContent = value;
			break;
		case ACTIONS.ON_SECOND_HABIT:
			state.feelings[1].feelingContent = value;
			break;
		case ACTIONS.ON_THIRD_HABIT:
			state.feelings[2].feelingContent = value;
			break;
		case ACTIONS.ON_FIRST_REFLECTION:
			state.feelings[0].feelingReflection = value;
			break;
		case ACTIONS.ON_SECOND_REFLECTION:
			state.feelings[1].feelingReflection = value;
			break;
		case ACTIONS.ON_THIRD_REFLECTION:
			state.feelings[2].feelingReflection = value;
		default:
		//do nothing;
	}
	return state;
}
