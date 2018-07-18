const { GraphQLInputObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary DocumentManifestContent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DocumentManifestContent_Input',
	description: 'The list of Documents included in the manifest.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		pAttachment: {
			type: new GraphQLNonNull(require('./attachment.input')),
			description: 'The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.'
		},
		pReference: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The list of references to document content, or Attachment that consist of the parts of this document manifest. Usually, these would be document references, but direct references to Media or Attachments are also allowed.'
		}
	})
});
