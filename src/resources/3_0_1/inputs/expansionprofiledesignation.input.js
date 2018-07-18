const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ExpansionProfileDesignation Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ExpansionProfileDesignation_Input',
	description: 'A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		include: {
			type: require('./expansionprofiledesignationinclude.input'),
			description: 'Designations to be included.'
		},
		exclude: {
			type: require('./expansionprofiledesignationexclude.input'),
			description: 'Designations to be excluded.'
		}
	})
});
