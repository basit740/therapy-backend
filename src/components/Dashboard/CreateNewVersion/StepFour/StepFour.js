import React, { useState } from 'react';
import classes from './StepFour.module.css';
import uniqueId from 'lodash.uniqueid';

import Tag from '../../UI/Tag';
const DEFAULT_TAGS_DATA = [
	{
		id: 123,
		title: 'Watch a Comedy',
		status: 'not_selected',
	},
	{ id: 453, title: 'Go to sleep early' },
	{
		id: 323,
		title: 'Weighted blanket',
		status: 'not_selected',
	},
	{
		id: 562,
		title: 'Go to a movie',
		status: 'not_selected',
	},
	{
		id: 531,
		title: 'Ride a bike',
		status: 'not_selected',
	},
];
const StepFour = () => {
	let [tags, setTags] = useState(DEFAULT_TAGS_DATA);
	const [selectedTags, setSelectedTags] = useState([]);
	const [tagTitle, setTagTitle] = useState('');

	const addToSelected = (item) => {
		if (item.status === 'selected') {
			setSelectedTags((prevTags) => {
				return [...prevTags, item];
			});
		} else {
			let prevTags = selectedTags;
			const filteredTags = prevTags.filter((tag) => tag.id !== item.id);
			setSelectedTags(filteredTags);
			console.log(filteredTags.length);
		}
	};

	const titleTagHandler = (event) => {
		let value = event.currentTarget.value;
		setTagTitle(value);
	};

	const newTagHandler = () => {
		if (tagTitle.trim() === '') {
			console.log('this happend');
			return;
		}
		let newId = uniqueId();
		const ITEM = { id: newId, title: tagTitle, status: 'not_selected' };
		setTags((prevTags) => {
			return [...prevTags, ITEM];
		});
		setTagTitle('');
	};
	return (
		<section className={classes.stepFourOfEleven}>
			<h1>Replace non-productive coping methods with "Mean Time Tools"</h1>
			<p>
				The idea es to by to replace the non-productrve coping items you listed
				in the previous step with productive coping tools to create the
				conditions for reacting differently and better. The key is to understand
				and accept that things will not always go your way, and during this
				process you can either make the process easier to deal with or harder.
				This is where the idea and the philosophy of "How do you function better
				in the meantime and this tool comes into play; it can enable the ability
				to move on quicker and better when facing the tough and difficult things
				that life puts In front of us. This list can be very valuable because
				sometimes it is easy to forget. especially in times of trouble because
				our minds race off. This is mostly due to hormones such as adrenaline
				and cortisol that impact our minds resulting in a lack of concentration
				and stress.
			</p>
			<p>
				There are so many ways today to be entertained. to be active, and to be
				involved. What can you do in the meantime instead? Add to the list of
				examples.
			</p>
			<div className={classes['text-area-wrapper']}>
				<textarea
					className={classes['selectedArea']}
					onChange={titleTagHandler}
					value={tagTitle}
				></textarea>
				<div className={classes['add-button']}>
					<div className={classes['plus-icon']} onClick={newTagHandler}>
						+
					</div>{' '}
					<div>Add</div>
				</div>
			</div>

			<br />
			<div className={classes.selectedTextArea}>
				{tags.length > 0 ? (
					tags.map((obj, i) => (
						<Tag title={obj.title} id={obj.id} onClick={addToSelected} />
					))
				) : (
					<div></div>
				)}
			</div>
		</section>
	);
};

export default StepFour;
