import React, { useState } from 'react';
import './Tag.css';

const Tag = ({ title, id, onClick }) => {
	const [classes, setClasses] = useState('tag');
	const clickHandler = () => {
		let allClasses = 'tag';
		if (classes.includes('tag__selected')) {
			setClasses('tag');
			onClick({
				id: id,
				status: 'not_selected',
				title: title,
			});
		} else {
			allClasses += ' tag__selected';
			setClasses(allClasses);
			onClick({
				id: id,
				status: 'selected',
				title: title,
			});
		}
	};

	return (
		<div className={classes} onClick={clickHandler}>
			{title}
		</div>
	);
};

export default Tag;
