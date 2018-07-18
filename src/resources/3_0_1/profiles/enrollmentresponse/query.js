// Schemas
const EnrollmentResponseSchema = require('../../schemas/enrollmentresponse.schema');

// Arguments
const EnrollmentResponseArgs = require('../../parameters/enrollmentresponse.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	enrollmentresponseResolver,
	enrollmentresponseListResolver,
	enrollmentresponseInstanceResolver
} = require('./resolver');

/**
 * @name exports.EnrollmentResponseQuery
 * @summary EnrollmentResponse Query.
 */
module.exports.EnrollmentResponseQuery = {
	args: Object.assign({}, CommonArgs, EnrollmentResponseArgs),
	description: 'Query for a single EnrollmentResponse',
	resolve: enrollmentresponseResolver,
	type: EnrollmentResponseSchema
};

/**
 * @name exports.EnrollmentResponseListQuery
 * @summary EnrollmentResponseList Query.
 */
module.exports.EnrollmentResponseListQuery = {
	args: Object.assign({}, CommonArgs, EnrollmentResponseArgs),
	description: 'Query for multiple EnrollmentResponses',
	resolve: enrollmentresponseListResolver,
	type: new GraphQLList(EnrollmentResponseSchema)
};

/**
 * @name exports.EnrollmentResponseInstanceQuery
 * @summary EnrollmentResponseInstance Query.
 */
module.exports.EnrollmentResponseInstanceQuery = {
	description: 'Get information about a single EnrollmentResponse',
	resolve: enrollmentresponseInstanceResolver,
	type: EnrollmentResponseSchema
};
