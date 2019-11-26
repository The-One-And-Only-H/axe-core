const metaViewportMetadata = {
	id: 'meta-viewport',
	selector: 'meta[name="viewport"]',
	excludeHidden: false,
	tags: ['cat.sensory-and-visual-cues', 'wcag2aa', 'wcag144'],
	metadata: {
		description: 'Ensures <meta name="viewport"> does not disable text scaling and zooming',
		help: 'Zooming and scaling must not be disabled'
	},
	all: [],
	any: ['meta-viewport'],
	none: []
};

export default metaViewportMetadata;