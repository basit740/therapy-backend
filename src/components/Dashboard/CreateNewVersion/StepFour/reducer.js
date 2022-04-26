import uniqueId from 'lodash.uniqueid';
import { DEFAULT_TAGS_DATA } from '../../../../data/step-four/defaultData';
export const INITIAL_STATE = {
	tags: DEFAULT_TAGS_DATA,
	selected: [],
	tagTitle: '',
};

export const ACTIONS = {
	CHANGE_TITLE: 'title_change',
	ADD_TO_SELECTED: 'add_to_selected',
	ADD_NEW_TAG: 'add_new_tag',
	DATA_FROM_SERVER: 'data_from_server',
	DATA_FROM_LOCAL_STATE: 'data_from_local_state',
};

export default function reducer(state, action) {
	const type = action.type;
	const data = action.payload.data;

	const prevState = { ...state };

	switch (type) {
		case ACTIONS.ADD_NEW_TAG:
			let newId = uniqueId();
			const newTag = {
				id: newId,
				title: prevState.tagTitle,
				status: 'not_selected',
			};
			prevState.tags = [...prevState.tags, newTag];
			prevState.tagTitle = '';
			break;
		case ACTIONS.CHANGE_TITLE:
			prevState.tagTitle = data;
			break;
		case ACTIONS.ADD_TO_SELECTED:
			if (data.status === 'selected') {
				prevState.selected = [...prevState.selected, data];
			} else {
				const filteredTags = prevState.selected.filter(
					(tag) => tag.id !== data.id
				);
				prevState.selected = filteredTags;
			}
			break;
		default:
			return prevState;
	}
	return prevState;
}
