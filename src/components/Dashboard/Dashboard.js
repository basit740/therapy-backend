import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Version from './Version/Version';

// New Journey
import NewJourney from './NewJourney/NewJourney';

import MyProgress from './MyProgress';

const Dashboard = () => {
	const [newVersion, setNewVersion] = useState(false);
	return (
		<>
			<Outlet />
		</>
	);
};

export default Dashboard;
