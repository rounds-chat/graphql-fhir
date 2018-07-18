const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary AllergyIntoleranceReaction Schema
 */
module.exports = new GraphQLObjectType({
	name: 'AllergyIntoleranceReaction',
	description: 'Details about each adverse reaction event linked to exposure to the identified Substance.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/substance-code
		substance: {
			type: require('./codeableconcept.schema'),
			description: 'Identification of the specific substance considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different to the substance identified as the cause of the risk, but must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite substance that includes the identified substance. It must be clinically safe to only process the AllergyIntolerance.substance and ignore the AllergyIntolerance.event.substance.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/reaction-event-certainty
		certainty: {
			type: CodeScalar,
			description: 'Statement about the degree of clinical certainty that the specific substance was the cause of the manifestation in this reaction event.'
		},
		_certainty: {
			type: require('./element.schema'),
			description: 'Statement about the degree of clinical certainty that the specific substance was the cause of the manifestation in this reaction event.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/manifestation-codes
		manifestation: {
			type: new GraphQLList(new GraphQLNonNull(require('./codeableconcept.schema'))),
			description: 'Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.'
		},
		description: {
			type: GraphQLString,
			description: 'Text description about the reaction as a whole, including details of the manifestation if required.'
		},
		_description: {
			type: require('./element.schema'),
			description: 'Text description about the reaction as a whole, including details of the manifestation if required.'
		},
		onset: {
			type: DateTimeScalar,
			description: 'Record of the date and/or time of the onset of the Reaction.'
		},
		_onset: {
			type: require('./element.schema'),
			description: 'Record of the date and/or time of the onset of the Reaction.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/reaction-event-severity
		severity: {
			type: CodeScalar,
			description: 'Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.'
		},
		_severity: {
			type: require('./element.schema'),
			description: 'Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/route-codes
		exposureRoute: {
			type: require('./codeableconcept.schema'),
			description: 'Identification of the route by which the subject was exposed to the substance.'
		},
		note: {
			type: require('./annotation.schema'),
			description: 'Additional text about the adverse reaction event not captured in other fields.'
		}
	})
});
