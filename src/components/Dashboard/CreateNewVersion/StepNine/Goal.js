import React, { useState } from 'react';
import classes from './Goal.module.css';
const Goal = (props) => {
	const [showDeleteBtn, setShowDeleteBtn] = useState(false);
	const clickHandler = (event) => {
		console.log('handling delete');
	};
	return (
		<div
			className={classes.goal}
			id={props.id}
			onClick={clickHandler}
			onMouseEnter={() => setShowDeleteBtn(true)}
			onMouseLeave={() => setShowDeleteBtn(false)}
		>
			{showDeleteBtn && (
				<div
					className={classes['goal-delete-btn']}
					onClick={props.onDelete}
					id={props.id}
					parent-id={props.parentId}
				>
					X
				</div>
			)}

			<div className={classes['goal__content']}>{props.title}</div>
		</div>
	);
};

export default Goal;
