import { Skeleton } from '@mui/material';
import React from 'react';

import './MyVersionsLeft.css';

const MyVersionsLoading = () => {
	const counts = [1, 2, 3, 4];
	return (
		<>
			{counts.map((c) => {
				return (
					<div className='skeleton-container'>
						<Skeleton
							animation='wave'
							style={{
								width: '200px',
								height: '40px',
								marginRight: '15px',
							}}
						/>

						<Skeleton
							animation='wave'
							className='status-chip'
							style={{
								marginRight: '15px',
								height: '60px',
							}}
						/>

						<Skeleton
							animation='wave'
							className='action-chip'
							style={{
								minWidth: '250px',
								height: '60px',
							}}
						/>
					</div>
				);
			})}
		</>
	);
};

export default MyVersionsLoading;
