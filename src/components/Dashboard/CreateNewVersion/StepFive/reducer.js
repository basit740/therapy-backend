const ACTIONS = {
	FIRST_ACTION: 'first_action',
	SECOND_ACTION: 'second_action',
	THIRD_ACTION: 'third_action',
	FIRST_DATE: 'first_date',
	SECOND_DATE: 'second_date',
	THIRD_DATE: 'third_date',
};

const initialState = {
	actions: [
		{
			actionContent: '',
			actionDate: undefined,
		},
		{
			actionContent: '',
			actionDate: undefined,
		},
		{
			actionContent: '',
			actionDate: undefined,
		},
	],
};
