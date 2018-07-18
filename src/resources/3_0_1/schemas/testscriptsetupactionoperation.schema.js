const CodeScalar = require('../scalars/code.scalar');
const IdScalar = require('../scalars/id.scalar');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary TestScriptSetupActionOperation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'TestScriptSetupActionOperation',
	description: 'The operation to perform.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/testscript-operation-codes
		type: {
			type: require('./coding.schema'),
			description: 'Server interaction or operation type.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/defined-types
		resource: {
			type: CodeScalar,
			description: 'The type of the resource.  See http://build.fhir.org/resourcelist.html.'
		},
		_resource: {
			type: require('./element.schema'),
			description: 'The type of the resource.  See http://build.fhir.org/resourcelist.html.'
		},
		label: {
			type: GraphQLString,
			description: 'The label would be used for tracking/logging purposes by test engines.'
		},
		_label: {
			type: require('./element.schema'),
			description: 'The label would be used for tracking/logging purposes by test engines.'
		},
		description: {
			type: GraphQLString,
			description: 'The description would be used by test engines for tracking and reporting purposes.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'The description would be used by test engines for tracking and reporting purposes.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/content-type
		accept: {
			type: CodeScalar,
			description: 'The content-type or mime-type to use for RESTful operation in the \'Accept\' header.'
		},
		_accept: {
			type: require('./element.schema'),
			description: 'The content-type or mime-type to use for RESTful operation in the \'Accept\' header.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/content-type
		contentType: {
			type: CodeScalar,
			description: 'The content-type or mime-type to use for RESTful operation in the \'Content-Type\' header.'
		},
		_contentType: {
			type: require('./element.schema'),
			description: 'The content-type or mime-type to use for RESTful operation in the \'Content-Type\' header.'
		},
		destination: {
			type: GraphQLInt,
			description: 'The server where the request message is destined for.  Must be one of the server numbers listed in TestScript.destination section.'
		},
		_destination: {
			type: require('./element.schema'),
			description: 'The server where the request message is destined for.  Must be one of the server numbers listed in TestScript.destination section.'
		},
		encodeRequestUrl: {
			type: GraphQLBoolean,
			description: 'Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.'
		},
		_encodeRequestUrl: {
			type: require('./element.schema'),
			description: 'Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.'
		},
		origin: {
			type: GraphQLInt,
			description: 'The server where the request message originates from.  Must be one of the server numbers listed in TestScript.origin section.'
		},
		_origin: {
			type: require('./element.schema'),
			description: 'The server where the request message originates from.  Must be one of the server numbers listed in TestScript.origin section.'
		},
		params: {
			type: GraphQLString,
			description: 'Path plus parameters after [type].  Used to set parts of the request URL explicitly.'
		},
		_params: {
			type: require('./element.schema'),
			description: 'Path plus parameters after [type].  Used to set parts of the request URL explicitly.'
		},
		requestHeader: {
			type: new GraphQLList(require('./testscriptsetupactionoperationrequestheader.schema')),
			description: 'Header elements would be used to set HTTP headers.'
		},
		requestId: {
			type: IdScalar,
			description: 'The fixture id (maybe new) to map to the request.'
		},
		_requestId: {
			type: require('./element.schema'),
			description: 'The fixture id (maybe new) to map to the request.'
		},
		responseId: {
			type: IdScalar,
			description: 'The fixture id (maybe new) to map to the response.'
		},
		_responseId: {
			type: require('./element.schema'),
			description: 'The fixture id (maybe new) to map to the response.'
		},
		sourceId: {
			type: IdScalar,
			description: 'The id of the fixture used as the body of a PUT or POST request.'
		},
		_sourceId: {
			type: require('./element.schema'),
			description: 'The id of the fixture used as the body of a PUT or POST request.'
		},
		targetId: {
			type: IdScalar,
			description: 'Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.'
		},
		_targetId: {
			type: require('./element.schema'),
			description: 'Id of fixture used for extracting the [id],  [type], and [vid] for GET requests.'
		},
		url: {
			type: GraphQLString,
			description: 'Complete request URL.'
		},
		_url: {
			type: require('./element.schema'),
			description: 'Complete request URL.'
		}
	})
});
