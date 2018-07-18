const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestReportTeardownAction Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'TestReportTeardownAction_Input',
	description: 'The teardown action will only contain an operation.',
	fields: () => extendSchema(require('./backboneelement.input'))
});
