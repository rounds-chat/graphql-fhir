// Schemas
const ObservationSchema = require('../../schemas/observation.schema');

// Arguments
const ObservationArgs = require('../../parameters/observation.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	observationResolver,
	observationListResolver,
	observationInstanceResolver
} = require('./resolver');

/**
 * @name exports.ObservationQuery
 * @summary Observation Query.
 */
module.exports.ObservationQuery = {
	args: Object.assign({}, CommonArgs, ObservationArgs),
	description: 'Query for a single Observation',
	resolve: observationResolver,
	type: ObservationSchema
};

/**
 * @name exports.ObservationListQuery
 * @summary ObservationList Query.
 */
module.exports.ObservationListQuery = {
	args: Object.assign({}, CommonArgs, ObservationArgs),
	description: 'Query for multiple Observations',
	resolve: observationListResolver,
	type: new GraphQLList(ObservationSchema)
};

/**
 * @name exports.ObservationInstanceQuery
 * @summary ObservationInstance Query.
 */
module.exports.ObservationInstanceQuery = {
	description: 'Get information about a single Observation',
	resolve: observationInstanceResolver,
	type: ObservationSchema
};
