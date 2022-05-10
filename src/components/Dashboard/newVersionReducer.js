export const initialState = {
	versions: [],
	selectedVersion: null,
	isLoading: true,
};

export default function reducer(state, action) {
	const pState = { ...state };

	if (action.type === 'DATA_FROM_SERVER') {
		const recentVersions = action.payload.data.sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt)
		);

		const latestInProgress = recentVersions.find((v) => {
			return v.status === 'in_progress';
		});

		//console.log(latestInProgress.stepsCount);

		pState.selectedVersion = { ...latestInProgress };
		pState.isLoading = false;
	} else if (action.type === 'DATA_LOADING') {
		pState.isLoading = true;
	} else if (action.type === 'SELECT_VERSION') {
		pState.selectedVersion = action.payload.version;
		pState.isLoading = false;
	}
	return pState;
}
