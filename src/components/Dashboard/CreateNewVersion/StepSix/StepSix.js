import React, { useState, useRef } from 'react';
import StepSixAdd from './StepSixAdd';
import './StepSix.css';

import uniqueId from 'lodash.uniqueid';

const StepSix = () => {
	let contact1Ref = useRef();
	let contact2Ref = useRef();
	let contact3Ref = useRef();
	let [textareaReachOut, setTextareaReachOut] = useState([
		{
			id: 1,
			ref: contact1Ref,
		},
		{ id: 2, ref: contact2Ref },
		{
			id: 3,
			ref: contact3Ref,
		},
	]);

	let [contacts, setContacts] = [];

	const addAnotherReachOut = () => {
		let check = textareaReachOut.length + 1;
		setTextareaReachOut([...textareaReachOut, check]);
		console.log(textareaReachOut);
	};
	const contactHandler = (event) => {
		console.log(event.target.value);
		// if (event.keyCode === 13) {
		// 	console.log('enterd');
		// 	let newId = uniqueId();
		// 	newId = 'contact_' + newId;
		// 	let newContact = {
		// 		id: event.currentTarget.id,
		// 		details: event.target.value,
		// 	};

		// 	setContacts((prevContacts) => {
		// 		return [...prevContacts, newContact];
		// 	});

		// 	if (event.target.id === 1) {
		// 		contact1Ref.current.focus();
		// 	} else if (event.target.id === 2) {
		// 		contact2Ref.current.focus();
		// 	} else {
		// 		contact3Ref.current.focus();
		// 	}
		// 	console.log(contacts);
		// }
	};

	return (
		<section className='sectionReachOut'>
			<h2>Reach Out: Loneliness and connections.</h2>
			<p>
				Ever hear that the mind can be like a bad neighborhood at night? You
				don't want to be there alone! <br />
				The reality is that someone else has gone through what you've gone
				through before; many of us have similar stories. Becoming disconnected
				from family, friends and communities is one of the outcomes when facing
				some of life's difficult times, yet this self-imposed isolation can be
				one of the worst things to do. it can have consequences on your health,
				including affecting your mood, behavior, thinking, and biology.
			</p>
			<p>
				Disclosure and communication can be a huge part of healing as validation
				comes from knowing that we are not the only ones going through difficult
				situations. And if family doesn't get what you are going through, go
				elsewhere for help and support. There is a growing community that is
				there to support those who are experiencing mental health concerns.
				Learn on people. We can all benefit from better connections - work at
				it; you must reach out. Who can you turn to? Make a list below.
			</p>

			{textareaReachOut.length > 0 ? (
				textareaReachOut.map((contactInput, key) => (
					<StepSixAdd
						id={contactInput.id}
						ref={contactInput.ref}
						onChange={contactHandler}
					/>
				))
			) : (
				<div></div>
			)}
			<div className='add'>
				<div>
					<button onClick={addAnotherReachOut} className='AddMore'>
						<div className='addition'>+</div>
						<div>Add another</div>
					</button>
				</div>
			</div>
		</section>
	);
};

export default StepSix;
