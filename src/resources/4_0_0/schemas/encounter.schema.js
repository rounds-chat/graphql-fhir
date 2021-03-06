const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Encounter Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Encounter',
	description:
		'An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Encounter_Enum_schema',
					values: { Encounter: { value: 'Encounter' } },
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
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
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
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema.js')),
			description: 'Identifier(s) by which this encounter is known.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				'planned | arrived | triaged | in-progress | onleave | finished | cancelled +.',
		},
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description:
				'planned | arrived | triaged | in-progress | onleave | finished | cancelled +.',
		},
		statusHistory: {
			type: new GraphQLList(require('./encounterstatushistory.schema.js')),
			description:
				'The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them.',
		},
		class: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description:
				'Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations.',
		},
		classHistory: {
			type: new GraphQLList(require('./encounterclasshistory.schema.js')),
			description:
				'The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient.',
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation).',
		},
		serviceType: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Broad categorization of the service that is to be provided (e.g. cardiology).',
		},
		priority: {
			type: require('./codeableconcept.schema.js'),
			description: 'Indicates the urgency of the encounter.',
		},
		subject: {
			type: new GraphQLUnionType({
				name: 'Encountersubject_subject_Union',
				description: 'The patient or group present at the encounter.',
				types: () => [
					require('./patient.schema.js'),
					require('./group.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Group') {
						return require('./group.schema.js');
					}
				},
			}),
			description: 'The patient or group present at the encounter.',
		},
		episodeOfCare: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'EncounterepisodeOfCare_episodeOfCare_Union',
					description:
						'Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).',
					types: () => [require('./episodeofcare.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'EpisodeOfCare') {
							return require('./episodeofcare.schema.js');
						}
					},
				}),
			),
			description:
				'Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years).',
		},
		basedOn: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'EncounterbasedOn_basedOn_Union',
					description:
						'The request this encounter satisfies (e.g. incoming referral or procedure request).',
					types: () => [require('./servicerequest.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'ServiceRequest') {
							return require('./servicerequest.schema.js');
						}
					},
				}),
			),
			description:
				'The request this encounter satisfies (e.g. incoming referral or procedure request).',
		},
		participant: {
			type: new GraphQLList(require('./encounterparticipant.schema.js')),
			description: 'The list of people responsible for providing the service.',
		},
		appointment: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Encounterappointment_appointment_Union',
					description: 'The appointment that scheduled this encounter.',
					types: () => [require('./appointment.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Appointment') {
							return require('./appointment.schema.js');
						}
					},
				}),
			),
			description: 'The appointment that scheduled this encounter.',
		},
		period: {
			type: require('./period.schema.js'),
			description: 'The start and end time of the encounter.',
		},
		length: {
			type: require('./duration.schema.js'),
			description:
				'Quantity of time the encounter lasted. This excludes the time during leaves of absence.',
		},
		reasonCode: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.',
		},
		reasonReference: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'EncounterreasonReference_reasonReference_Union',
					description:
						'Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.',
					types: () => [
						require('./condition.schema.js'),
						require('./procedure.schema.js'),
						require('./observation.schema.js'),
						require('./immunizationrecommendation.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Condition') {
							return require('./condition.schema.js');
						}
						if (data && data.resourceType === 'Procedure') {
							return require('./procedure.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'ImmunizationRecommendation') {
							return require('./immunizationrecommendation.schema.js');
						}
					},
				}),
			),
			description:
				'Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis.',
		},
		diagnosis: {
			type: new GraphQLList(require('./encounterdiagnosis.schema.js')),
			description: 'The list of diagnosis relevant to this encounter.',
		},
		account: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Encounteraccount_account_Union',
					description:
						'The set of accounts that may be used for billing for this Encounter.',
					types: () => [require('./account.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Account') {
							return require('./account.schema.js');
						}
					},
				}),
			),
			description:
				'The set of accounts that may be used for billing for this Encounter.',
		},
		hospitalization: {
			type: require('./encounterhospitalization.schema.js'),
			description: 'Details about the admission to a healthcare service.',
		},
		location: {
			type: new GraphQLList(require('./encounterlocation.schema.js')),
			description:
				'List of locations where  the patient has been during this encounter.',
		},
		serviceProvider: {
			type: new GraphQLUnionType({
				name: 'EncounterserviceProvider_serviceProvider_Union',
				description:
					"The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.",
				types: () => [require('./organization.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description:
				"The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy.",
		},
		partOf: {
			type: new GraphQLUnionType({
				name: 'EncounterpartOf_partOf_Union',
				description:
					'Another Encounter of which this encounter is a part of (administratively or in time).',
				types: () => [require('./encounter.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Encounter') {
						return require('./encounter.schema.js');
					}
				},
			}),
			description:
				'Another Encounter of which this encounter is a part of (administratively or in time).',
		},
	}),
});
