const PositiveIntScalar = require('../scalars/positiveint.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList, GraphQLFloat } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ClaimItem Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'ClaimItem_Input',
	description: 'First tier of goods and services.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A service line number.'
		},
		_sequence: {
			type: require('./element.input'),
			description: 'A service line number.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActInvoiceGroupCode
		type: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'The type of product or service.'
		},
		provider: {
			type: require('./reference.input'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		diagnosisLinkId: {
			type: new GraphQLList(PositiveIntScalar),
			description: 'Diagnosis applicable for this service or product line.'
		},
		_diagnosisLinkId: {
			type: require('./element.input'),
			description: 'Diagnosis applicable for this service or product line.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/service-uscls
		service: {
			type: new GraphQLNonNull(require('./coding.input')),
			description: 'If a grouping item then \'GROUP\' otherwise it is a node therefore a code to indicate the Professional Service or Product supplied.'
		},
		serviceDate: {
			type: DateScalar,
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		_serviceDate: {
			type: require('./element.input'),
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		quantity: {
			type: require('./quantity.input'),
			description: 'The number of repetitions of a service or product.'
		},
		unitPrice: {
			type: require('./quantity.input'),
			description: 'If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group.'
		},
		factor: {
			type: GraphQLFloat,
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		_factor: {
			type: require('./element.input'),
			description: 'A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount.'
		},
		points: {
			type: GraphQLFloat,
			description: 'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.'
		},
		_points: {
			type: require('./element.input'),
			description: 'An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the good or service delivered. The concept of Points allows for assignment of point values for services and/or goods, such that a monetary amount can be assigned to each point.'
		},
		net: {
			type: require('./quantity.input'),
			description: 'The quantity times the unit price for an additional  service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/udi
		udi: {
			type: require('./coding.input'),
			description: 'List of Unique Device Identifiers associated with this line item.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/tooth
		bodySite: {
			type: require('./coding.input'),
			description: 'Physical service site on the patient (limb, tooth, etc.).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/surface
		subSite: {
			type: new GraphQLList(require('./coding.input')),
			description: 'A region or surface of the site, e.g. limb region or tooth surface(s).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/claim-modifiers
		modifier: {
			type: new GraphQLList(require('./coding.input')),
			description: 'Item typification or modifiers codes, e.g. for Oral whether the treatment is cosmetic or associated with TMJ, or an appliance was lost or stolen.'
		},
		detail: {
			type: new GraphQLList(require('./claimitemdetail.input')),
			description: 'Second tier of goods and services.'
		},
		prosthesis: {
			type: require('./claimitemprosthesis.input'),
			description: 'The materials and placement date of prior fixed prosthesis.'
		}
	})
});
