import React, { useState } from 'react';

import classes from './StepEight.module.css';
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
const StepEight = () => {
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
		<section className={classes.stepEightOfEleven}>
			<h1>Practise Gratitude and Faith</h1>
			<p>
				The benefits of practising gratitude have been clearly proven, as well
				as the belief in a higher power or something bigger than us. When things
				seem like they are very gloomy, remembering some of the things that are
				right or how well some of the other areas of your life may be can have a
				great impact on your well being and attitude. It's great way to put
				faith into practise, with the beliefs in good things to come, in what's
				in store for us, and reality is that most things always have a way of
				working out.
			</p>
			<p>
				Your goal here is to create a longest list possible and review it often.
				What are you grateful for and also reflect why are you greatful for
				things you have listed. Add to the list below.
			</p>
			<div className={classes['text-area-wrapper']}>
				<textarea
					className={classes.selectedArea}
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

export default StepEight;
