const {
	ImagingManifestQuery,
	ImagingManifestListQuery,
	ImagingManifestInstanceQuery
} = require('./query');

const {
	ImagingManifestCreateMutation,
	ImagingManifestUpdateMutation,
	ImagingManifestDeleteMutation
} = require('./mutation');

/**
 * @name exports
 * @static
 * @summary GraphQL Configurations. This is needed to register this profile
 * with the GraphQL server.
 */
module.exports = {
	/**
	* Define Query Schema's here
	* Each profile will need to define the two queries it supports
	* and these keys must be unique across the entire application, like routes
	*/
	query: {
		ImagingManifest: ImagingManifestQuery,
		ImagingManifestList: ImagingManifestListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		ImagingManifestCreate: ImagingManifestCreateMutation,
		ImagingManifestUpdate: ImagingManifestUpdateMutation,
		ImagingManifestDelete: ImagingManifestDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'ImagingManifest',
		path: '/3_0_1/ImagingManifest/:id',
		query: ImagingManifestInstanceQuery
	}
};
