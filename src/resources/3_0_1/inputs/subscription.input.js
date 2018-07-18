const CodeScalar = require('../scalars/code.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Subscription Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Subscription_Input',
	description: 'Base StructureDefinition for Subscription Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/subscription-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the subscription, which marks the server state for managing the subscription.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the subscription, which marks the server state for managing the subscription.'
		},
		contact: {
			type: new GraphQLList(require('./contactpoint.input')),
			description: 'Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting.'
		},
		end: {
			type: InstantScalar,
			description: 'The time for the server to turn the subscription off.'
		},
		_end: {
			type: require('./element.input'),
			description: 'The time for the server to turn the subscription off.'
		},
		reason: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'A description of why this subscription is defined.'
		},
		_reason: {
			type: require('./element.input'),
			description: 'A description of why this subscription is defined.'
		},
		criteria: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'The rules that the server should use to determine when to generate notifications for this subscription.'
		},
		_criteria: {
			type: require('./element.input'),
			description: 'The rules that the server should use to determine when to generate notifications for this subscription.'
		},
		error: {
			type: GraphQLString,
			description: 'A record of the last error that occurred when the server processed a notification.'
		},
		_error: {
			type: require('./element.input'),
			description: 'A record of the last error that occurred when the server processed a notification.'
		},
		channel: {
			type: new GraphQLNonNull(require('./subscriptionchannel.input')),
			description: 'Details where to send notifications when resources are received that meet the criteria.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/subscription-tag
		tag: {
			type: new GraphQLList(require('./coding.input')),
			description: 'A tag to add to any resource that matches the criteria, after the subscription is processed.'
		}
	})
});
