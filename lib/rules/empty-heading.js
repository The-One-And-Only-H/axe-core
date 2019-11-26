import headingMatches from './heading-matches';

const emptyHeadingMetadata = {
	id: 'empty-heading',
	selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]',
	matches: headingMatches,
	tags: ['cat.name-role-value', 'best-practice'],
	metadata: {
		description: 'Ensures headings have discernible text',
		help: 'Headings must not be empty'
	},
	all: [],
	any: ['has-visible-text'],
	none: []
};

export default emptyHeadingMetadata;