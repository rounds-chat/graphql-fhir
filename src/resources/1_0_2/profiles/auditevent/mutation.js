// Scalars
const IdScalar = require('../../scalars/id.scalar');

// Schemas
const AuditEventSchema = require('../../schemas/auditevent.schema');

// Inputs
const AuditEventInput = require('../../inputs/auditevent.input');


const {
	auditeventCreateResolver,
	auditeventUpdateResolver,
	auditeventDeleteResolver
} = require('./resolver');

let WriteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for creating/updating a AuditEvent record.'
	},
	resource: {
		type: AuditEventInput,
		description: 'AuditEvent Information for the record.'
	}
};

let DeleteArgs = {
	id: {
		type: IdScalar,
		description: 'Unique identifier for selecting a AuditEvent record for deletion.'
	}
};

/**
 * @name exports.AuditEventCreateMutation
 * @summary AuditEventCreate Mutation.
 */
module.exports.AuditEventCreateMutation = {
	args: WriteArgs,
	description: 'Create a AuditEvent',
	resolve: auditeventCreateResolver,
	type: AuditEventSchema
};

/**
 * @name exports.AuditEventUpdateMutation
 * @summary AuditEventUpdate Mutation.
 */
module.exports.AuditEventUpdateMutation = {
	args: WriteArgs,
	description: 'Query for multiple AuditEvents',
	resolve: auditeventUpdateResolver,
	type: AuditEventSchema
};

/**
 * @name exports.AuditEventDeleteMutation
 * @summary AuditEventDelete Mutation.
 */
module.exports.AuditEventDeleteMutation = {
	args: DeleteArgs,
	description: 'Get information about a single AuditEvent',
	resolve: auditeventDeleteResolver,
	type: AuditEventSchema
};
