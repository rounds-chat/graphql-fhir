const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLString,
	GraphQLBoolean,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateScalar = require('../scalars/date.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Condition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Condition',
	description: 'Base StructureDefinition for Condition Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Condition_Enum_schema',
					values: { Condition: { value: 'Condition' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description:
				'This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).',
		},
		patient: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Conditionpatient_patient_Union',
					description:
						'Indicates the patient who the condition record is associated with.',
					types: () => [require('./patient.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Patient') {
							return require('./patient.schema.js');
						}
					},
				}),
			),
			description:
				'Indicates the patient who the condition record is associated with.',
		},
		encounter: {
			type: new GraphQLUnionType({
				name: 'Conditionencounter_encounter_Union',
				description: 'Encounter during which the condition was first asserted.',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description: 'Encounter during which the condition was first asserted.',
		},
		asserter: {
			type: new GraphQLUnionType({
				name: 'Conditionasserter_asserter_Union',
				description: 'Individual who is making the condition statement.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./patient.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
				},
			}),
			description: 'Individual who is making the condition statement.',
		},
		_dateRecorded: {
			type: require('./element.schema.js'),
			description: 'A date, when  the Condition statement was documented.',
		},
		dateRecorded: {
			type: DateScalar,
			description: 'A date, when  the Condition statement was documented.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description: 'Identification of the condition, problem or diagnosis.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-category
		category: {
			type: require('./codeableconcept.schema.js'),
			description: 'A category assigned to the condition.',
		},
		_clinicalStatus: {
			type: require('./element.schema.js'),
			description: 'The clinical status of the condition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-clinical
		clinicalStatus: {
			type: CodeScalar,
			description: 'The clinical status of the condition.',
		},
		_verificationStatus: {
			type: require('./element.schema.js'),
			description:
				'The verification status to support the clinical status of the condition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-ver-status
		verificationStatus: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'The verification status to support the clinical status of the condition.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-severity
		severity: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A subjective assessment of the severity of the condition as evaluated by the clinician.',
		},
		_onsetDateTime: {
			type: require('./element.schema.js'),
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		onsetDateTime: {
			type: DateTimeScalar,
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		onsetQuantity: {
			type: require('./quantity.schema.js'),
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		onsetPeriod: {
			type: require('./period.schema.js'),
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		onsetRange: {
			type: require('./range.schema.js'),
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		_onsetString: {
			type: require('./element.schema.js'),
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		onsetString: {
			type: GraphQLString,
			description:
				'Estimated or actual date or date-time  the condition began, in the opinion of the clinician.',
		},
		_abatementDateTime: {
			type: require('./element.schema.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementDateTime: {
			type: DateTimeScalar,
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementQuantity: {
			type: require('./quantity.schema.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		_abatementBoolean: {
			type: require('./element.schema.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementBoolean: {
			type: GraphQLBoolean,
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementPeriod: {
			type: require('./period.schema.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementRange: {
			type: require('./range.schema.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		_abatementString: {
			type: require('./element.schema.js'),
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		abatementString: {
			type: GraphQLString,
			description:
				"The date or estimated date that the condition resolved or went into remission. This is called 'abatement' because of the many overloaded connotations associated with 'remission' or 'resolution' - Conditions are never really resolved, but they can abate.",
		},
		stage: {
			type: require('./conditionstage.schema.js'),
			description:
				'Clinical stage or grade of a condition. May include formal severity assessments.',
		},
		evidence: {
			type: new GraphQLList(require('./conditionevidence.schema.js')),
			description:
				'Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'The anatomical location where this condition manifests itself.',
		},
		_notes: {
			type: require('./element.schema.js'),
			description:
				'Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.',
		},
		notes: {
			type: GraphQLString,
			description:
				'Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.',
		},
	}),
});
