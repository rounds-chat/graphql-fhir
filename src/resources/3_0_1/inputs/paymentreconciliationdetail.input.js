const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary PaymentReconciliationDetail Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'PaymentReconciliationDetail_Input',
	description: 'List of individual settlement amounts and the corresponding transaction.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/payment-type
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'Code to indicate the nature of the payment, adjustment, funds advance, etc.'
		},
		request: {
			type: require('./reference.input'),
			description: 'The claim or financial resource.'
		},
		response: {
			type: require('./reference.input'),
			description: 'The claim response resource.'
		},
		submitter: {
			type: require('./reference.input'),
			description: 'The Organization which submitted the claim or financial transaction.'
		},
		payee: {
			type: require('./reference.input'),
			description: 'The organization which is receiving the payment.'
		},
		date: {
			type: DateScalar,
			description: 'The date of the invoice or financial resource.'
		},
		_date: {
			type: require('./element.input'),
			description: 'The date of the invoice or financial resource.'
		},
		amount: {
			type: require('./money.input'),
			description: 'Amount paid for this detail.'
		}
	})
});
