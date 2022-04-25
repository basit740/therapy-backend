import React, { useState, useEffect } from 'react';
import './Thoughts.css';
import ThoughtCard from './ThoughtCard';

import Thought from './Thought';

const Thoughts = (props) => {
	const [firstThoughts, setFirstThoughts] = useState([]);
	const [secondThoghts, setSecondThoughts] = useState([]);
	const [thirdThoughts, setThirdThoughts] = useState([]);
	const [fourthThoughts, setFourthThoughts] = useState([]);

	const [newThought, setNewThought] = useState('');

	const [draggingThought, setDraggingThought] = useState(null);

	const [dragSourceId, setDragSourceId] = useState(null);

	////////////////////////////////////// HELPER FUNCTIONS       /////////////////////
	const cleanSourceCard = (id, draggingThg) => {
		if (id == 1) {
			const filtered = firstThoughts.filter((thg) => thg.id != draggingThg.id);
			setFirstThoughts(filtered);
		} else if (id == 2) {
			const filtered = secondThoghts.filter((thg) => thg.id != draggingThg.id);
			setSecondThoughts(filtered);
		} else if (id == 3) {
			const filtered = thirdThoughts.filter((thg) => thg.id != draggingThg.id);
			setThirdThoughts(filtered);
		} else if (id == 4) {
			const filtered = fourthThoughts.filter((tgh) => tgh.id != draggingThg.id);
			setFourthThoughts(filtered);
		}
	};

	const findInFirstCard = (draggingTgh) => {
		const found = firstThoughts.find((thg) => thg.id == draggingTgh.id);
		if (found) {
			return true;
		}
	};

	const findInSecondCard = (draggingTgh) => {
		const found = secondThoghts.find((thg) => thg.id == draggingTgh.id);
		if (found) {
			return true;
		}
	};

	const findInThirdCard = (draggingTgh) => {
		const found = thirdThoughts.find((thg) => thg.id == draggingTgh.id);
		if (found) {
			return true;
		}
	};

	const findInFourthCard = (draggingTgh) => {
		const found = fourthThoughts.find((thg) => thg.id == draggingTgh.id);
		if (found) {
			return true;
		}
	};

	const filterThoughts = (parentCardId, thgId) => {
		if (parentCardId == 1) {
			const filterd = firstThoughts.filter((thg) => thg.id != thgId);
			return filterd;
		}
		if (parentCardId == 2) {
			const filterd = secondThoghts.filter((thg) => thg.id != thgId);
			return filterd;
		}
		if (parentCardId == 3) {
			const filterd = thirdThoughts.filter((thg) => thg.id != thgId);
			return filterd;
		}

		if (parentCardId == 4) {
			const filterd = fourthThoughts.filter((thg) => thg.id != thgId);
			return filterd;
		}
	};
	/////////////////////////////////// NATIVE ADD AND DELETE FUNCTIONALITY FOR ITEMS ///////////

	const newThoughtHandler = (newThought) => {
		setNewThought(newThought);
		if (newThought.cardId === '1') {
			setFirstThoughts((prevThoughts) => {
				return [...prevThoughts, newThought];
			});
			setNewThought('');
		} else if (newThought.cardId === '2') {
			setSecondThoughts((prevThoughts) => {
				return [...prevThoughts, newThought];
			});
			setNewThought('');
		} else if (newThought.cardId === '3') {
			setThirdThoughts((prevThoughts) => {
				return [...prevThoughts, newThought];
			});
			setNewThought('');
		} else {
			setFourthThoughts((prevThoughts) => {
				return [...prevThoughts, newThought];
			});
			setNewThought('');
		}
	};

	const deleteThgHandler = (event) => {
		console.log(event.target.id);
		const CARD_ID = event.target.getAttribute('parentId');
		console.log('parent Card id', CARD_ID);

		if (CARD_ID == 1) {
			setFirstThoughts(filterThoughts(1, event.target.id));
		} else if (CARD_ID == 2) {
			setSecondThoughts(filterThoughts(2, event.target.id));
		} else if (CARD_ID == 3) {
			setThirdThoughts(filterThoughts(3, event.target.id));
		} else {
			setFourthThoughts(filterThoughts(4, event.target.id));
		}
	};

	const dragStartHandler = (event) => {
		console.log('drag is started', event.target.parentNode.id);
		event.target.classList.add('dragging');
		if (event.target.parentNode.id == 4) {
			const thg = fourthThoughts.find((thg) => thg.id == event.target.id);
			console.log('dragging thgought', thg);
			setDraggingThought(thg);
			setDragSourceId(4);
		}

		if (event.target.parentNode.id == 3) {
			const thg = thirdThoughts.find((thg) => thg.id == event.target.id);
			//console.log('dragging thought',thg)
			setDraggingThought(thg);
			setDragSourceId(3);
		}
		if (event.target.parentNode.id == 2) {
			const thg = secondThoghts.find((thg) => thg.id == event.target.id);
			//console.log('dragging thought',thg)
			setDraggingThought(thg);
			setDragSourceId(2);
		}
		if (event.target.parentNode.id == 1) {
			const thg = firstThoughts.find((thg) => thg.id == event.target.id);
			//console.log('dragging thought',thg)
			setDraggingThought(thg);
			setDragSourceId(1);
		}
	};

	const dragEndHandler = (event) => {
		event.target.classList.remove('dragging');
	};

	const dropHandler = (event) => {
		event.preventDefault();
		const element = document.querySelector('.dragging');
		console.log('drop end', event.target.id);

		if (event.target.id == 1) {
			// check if already exists
			if (dragSourceId == 1) {
				return;
			}
			if (findInFirstCard(draggingThought.id)) {
				return;
			}

			setFirstThoughts((prev) => {
				return [...prev, draggingThought];
			});

			cleanSourceCard(dragSourceId, draggingThought);
		} else if (event.target.id == 2) {
			if (dragSourceId == 2) {
				return;
			}

			if (findInSecondCard(draggingThought.id)) {
				return;
			}
			setSecondThoughts((prev) => {
				return [...prev, draggingThought];
			});
			cleanSourceCard(dragSourceId, draggingThought);
		} else if (event.target.id == 3) {
			if (dragSourceId == 3) {
				return;
			}

			if (findInThirdCard(draggingThought.id)) {
				return;
			}
			setThirdThoughts((prev) => {
				return [...prev, draggingThought];
			});
			cleanSourceCard(dragSourceId, draggingThought);
		} else if (event.target.id == 4) {
			if (dragSourceId == 4) {
				return;
			}
			if (findInFourthCard(draggingThought.id)) {
				return;
			}
			setFourthThoughts((prev) => {
				return [...prev, draggingThought];
			});
			cleanSourceCard(dragSourceId, draggingThought);
		}
	};

	const allowDrop = (event) => {
		console.log('dragging over element');
		event.preventDefault();
	};

	return (
		<div className='thought-cards-container'>
			<div className='container'>
				<div className='row g-0'>
					<div className='col'>
						<ThoughtCard
							key='1'
							id='1'
							title='Very likely or Real'
							thoughts={firstThoughts}
							onNewThought={newThoughtHandler}
							onDragStart={dragStartHandler}
							onDragEnd={dragEndHandler}
							onDrop={dropHandler}
							onDragOver={allowDrop}
							onDelete={deleteThgHandler}
						/>
					</div>
					<div className='col'>
						<ThoughtCard
							key='2'
							id='2'
							title='somewhat likely or real'
							thoughts={secondThoghts}
							onNewThought={newThoughtHandler}
							onDragStart={dragStartHandler}
							onDragEnd={dragEndHandler}
							onDrop={dropHandler}
							onDragOver={allowDrop}
							onDelete={deleteThgHandler}
						/>
					</div>
					<div className='col'>
						<ThoughtCard
							key='3'
							id='3'
							title='Probably not or unrealistic'
							thoughts={thirdThoughts}
							onNewThought={newThoughtHandler}
							onDragStart={dragStartHandler}
							onDragEnd={dragEndHandler}
							onDrop={dropHandler}
							onDragOver={allowDrop}
							onDelete={deleteThgHandler}
						/>
					</div>
					<div className='col'>
						<ThoughtCard
							key='4'
							id='4'
							title='Highly unlikey or unrealistic'
							thoughts={fourthThoughts}
							onNewThought={newThoughtHandler}
							onDragStart={dragStartHandler}
							onDragEnd={dragEndHandler}
							onDrop={dropHandler}
							onDragOver={allowDrop}
							onDelete={deleteThgHandler}
						/>
					</div>
				</div>
			</div>
		</div>
		// <div className='thought-cards-container'>

		// </div>
	);
};
export default Thoughts;
