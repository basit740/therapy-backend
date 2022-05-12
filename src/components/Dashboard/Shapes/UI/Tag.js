import React from 'react';
import './Tag.css';

const Tag = ({ title, id, onClick, status }) => {
	//const [localStatus, setLocalStatus] = useState(status);

	// const [classes, setClasses] = useState('tag');
	const clickHandler = () => {
		onClick({
			id: id,
			status: status,
			title: title,
		});
	};

	return (
		<div
			className={status === 'selected' ? `tag tag__selected` : `tag`}
			onClick={clickHandler}
		>
			{title}
		</div>
	);
};

export default Tag;
