const CodeScalar = require('../scalars/code.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary Address Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Address_Input',
	description: 'Base StructureDefinition for Address Type.',
	fields: () => extendSchema({
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/address-use
		use: {
			type: CodeScalar,
			description: 'The purpose of this address.'
		},
		_use: {
			type: require('./element.input'),
			description: 'The purpose of this address.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/address-type
		type: {
			type: CodeScalar,
			description: 'Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.'
		},
		_type: {
			type: require('./element.input'),
			description: 'Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.'
		},
		text: {
			type: GraphQLString,
			description: 'A full text representation of the address.'
		},
		_text: {
			type: require('./element.input'),
			description: 'A full text representation of the address.'
		},
		line: {
			type: new GraphQLList(GraphQLString),
			description: 'This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.'
		},
		_line: {
			type: require('./element.input'),
			description: 'This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.'
		},
		city: {
			type: GraphQLString,
			description: 'The name of the city, town, village or other community or delivery center.'
		},
		_city: {
			type: require('./element.input'),
			description: 'The name of the city, town, village or other community or delivery center.'
		},
		district: {
			type: GraphQLString,
			description: 'The name of the administrative area (county).'
		},
		_district: {
			type: require('./element.input'),
			description: 'The name of the administrative area (county).'
		},
		state: {
			type: GraphQLString,
			description: 'Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).'
		},
		_state: {
			type: require('./element.input'),
			description: 'Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (i.e. US 2 letter state codes).'
		},
		postalCode: {
			type: GraphQLString,
			description: 'A postal code designating a region defined by the postal service.'
		},
		_postalCode: {
			type: require('./element.input'),
			description: 'A postal code designating a region defined by the postal service.'
		},
		country: {
			type: GraphQLString,
			description: 'Country - a nation as commonly understood or generally accepted.'
		},
		_country: {
			type: require('./element.input'),
			description: 'Country - a nation as commonly understood or generally accepted.'
		},
		period: {
			type: require('./period.input'),
			description: 'Time period when address was/is in use.'
		}
	})
});
