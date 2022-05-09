export const createVersion = async (version) => {
	const response = await fetch(process.env.REACT_APP_API_URL + '/versions', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		},
		body: JSON.stringify(version),
	});

	return await response.json();
};

export const getVersions = async () => {
	const response = await fetch(process.env.REACT_APP_API_URL + '/versions/', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('token'),
		},
	});

	return await response.json();
};
