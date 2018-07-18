// Schemas
const MedicationStatementSchema = require('../../schemas/medicationstatement.schema');

// Arguments
const MedicationStatementArgs = require('../../parameters/medicationstatement.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	medicationstatementResolver,
	medicationstatementListResolver,
	medicationstatementInstanceResolver
} = require('./resolver');

/**
 * @name exports.MedicationStatementQuery
 * @summary MedicationStatement Query.
 */
module.exports.MedicationStatementQuery = {
	args: Object.assign({}, CommonArgs, MedicationStatementArgs),
	description: 'Query for a single MedicationStatement',
	resolve: medicationstatementResolver,
	type: MedicationStatementSchema
};

/**
 * @name exports.MedicationStatementListQuery
 * @summary MedicationStatementList Query.
 */
module.exports.MedicationStatementListQuery = {
	args: Object.assign({}, CommonArgs, MedicationStatementArgs),
	description: 'Query for multiple MedicationStatements',
	resolve: medicationstatementListResolver,
	type: new GraphQLList(MedicationStatementSchema)
};

/**
 * @name exports.MedicationStatementInstanceQuery
 * @summary MedicationStatementInstance Query.
 */
module.exports.MedicationStatementInstanceQuery = {
	description: 'Get information about a single MedicationStatement',
	resolve: medicationstatementInstanceResolver,
	type: MedicationStatementSchema
};
