// Tags

// Tags

export const createStep10Tags = async (versionId, tags) => {
	console.log('tags in api', tags);
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepTenTags/' + versionId,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
			body: JSON.stringify(tags),
		}
	);

	return await response.json();
};

export const getTags = async (versionId) => {
	const response = await fetch(
		process.env.REACT_APP_API_URL + '/stepTenTags/' + versionId,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + localStorage.getItem('token'),
			},
		}
	);

	return await response.json();
};
