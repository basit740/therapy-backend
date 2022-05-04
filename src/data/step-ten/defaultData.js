export const DEFAULT_TAGS_FIRST = [
	{
		id: '123',
		tagTitle: 'Watch a Comedy',
		status: 'not_selected',
		tagCategory: 'rules',
	},
	{
		id: '453',
		tagTitle: 'Go to sleep early',
		status: 'not_selected',
		tagCategory: 'rules',
	},
	{
		id: '323',
		tagTitle: 'Weighted blanket',
		status: 'not_selected',
		tagCategory: 'rules',
	},
	{
		id: '562',
		tagTitle: 'Go to a movie',
		status: 'not_selected',
		tagCategory: 'rules',
	},
	{
		id: '531',
		tagTitle: 'Ride a bike',
		status: 'not_selected',
		tagCategory: 'rules',
	},
];

/*


			prevState.firstTags.map((tag) => {
				tag['tagCategory'] = 'rules';
				tag.id = 'f' + tag.id;
			});

			console.log('firstTAgs', prevState.firstTags);
			prevState.secondTags.map((tg) => {
				tg['tagCategory'] = 'breakthroughs';
				tg.id = 's' + tg.id;
			});

			prevState.thirdTags.map((t) => {
				t['tagCategory'] = 'realizations';
				t.id = 't' + t.id;

                */

export const DEFAULT_TAGS_SECOND = [
	{
		id: '123s',
		tagTitle: 'Watch a Comedy',
		status: 'not_selected',
		tagCategory: 'breakthroughs',
	},
	{
		id: '453s',
		tagTitle: 'Go to sleep early',
		status: 'not_selected',
		tagCategory: 'breakthroughs',
	},
	{
		id: '323s',
		tagTitle: 'Weighted blanket',
		status: 'not_selected',
		tagCategory: 'breakthroughs',
	},
	{
		id: '562s',
		tagTitle: 'Go to a movie',
		status: 'not_selected',
		tagCategory: 'breakthroughs',
	},
	{
		id: '531s',
		tagTitle: 'Ride a bike',
		status: 'not_selected',
		tagCategory: 'breakthroughs',
	},
];

export const DEFAULT_TAGS_THIRD = [
	{
		id: '123m',
		tagTitle: 'Watch a Comedy',
		status: 'not_selected',
		tagCategory: 'realizations',
	},
	{
		id: '453m',
		tagTitle: 'Go to sleep early',
		status: 'not_selected',
		tagCategory: 'realizations',
	},
	{
		id: '323m',
		tagTitle: 'Weighted blanket',
		status: 'not_selected',
		tagCategory: 'realizations',
	},
	{
		id: '562m',
		tagTitle: 'Go to a movie',
		status: 'not_selected',
		tagCategory: 'realizations',
	},
	{
		id: '531m',
		tagTitle: 'Ride a bike',
		status: 'not_selected',
		tagCategory: 'realizations',
	},
];
