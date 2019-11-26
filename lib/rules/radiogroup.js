const radiogroupMetadata = {
	id: 'radiogroup',
	selector: 'input[type=radio][name]',
	tags: ['cat.forms', 'best-practice', 'deprecated'],
	metadata: {
		description: 'Ensures related <input type="radio"> elements have a group and that the group designation is consistent',
		help: 'Radio inputs with the same name attribute value must be part of a group'
	},
	enabled: false,
	all: [],
	any: ['group-labelledby', 'fieldset'],
	none: []
};

export default radiogroupMetadata;