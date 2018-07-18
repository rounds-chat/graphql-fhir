// Schemas
const PaymentNoticeSchema = require('../../schemas/paymentnotice.schema');

// Arguments
const PaymentNoticeArgs = require('../../parameters/paymentnotice.parameters');
const CommonArgs = require('../../parameters/common.parameters');

const { GraphQLList } = require('graphql');

const {
	paymentnoticeResolver,
	paymentnoticeListResolver,
	paymentnoticeInstanceResolver
} = require('./resolver');

/**
 * @name exports.PaymentNoticeQuery
 * @summary PaymentNotice Query.
 */
module.exports.PaymentNoticeQuery = {
	args: Object.assign({}, CommonArgs, PaymentNoticeArgs),
	description: 'Query for a single PaymentNotice',
	resolve: paymentnoticeResolver,
	type: PaymentNoticeSchema
};

/**
 * @name exports.PaymentNoticeListQuery
 * @summary PaymentNoticeList Query.
 */
module.exports.PaymentNoticeListQuery = {
	args: Object.assign({}, CommonArgs, PaymentNoticeArgs),
	description: 'Query for multiple PaymentNotices',
	resolve: paymentnoticeListResolver,
	type: new GraphQLList(PaymentNoticeSchema)
};

/**
 * @name exports.PaymentNoticeInstanceQuery
 * @summary PaymentNoticeInstance Query.
 */
module.exports.PaymentNoticeInstanceQuery = {
	description: 'Get information about a single PaymentNotice',
	resolve: paymentnoticeInstanceResolver,
	type: PaymentNoticeSchema
};
