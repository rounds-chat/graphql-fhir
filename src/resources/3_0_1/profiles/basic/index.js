const {
	BasicQuery,
	BasicListQuery,
	BasicInstanceQuery
} = require('./query');

const {
	BasicCreateMutation,
	BasicUpdateMutation,
	BasicDeleteMutation
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
		Basic: BasicQuery,
		BasicList: BasicListQuery
	},
	/**
	* Define Mutation Schema's here
	* Each profile will need to define the supported mutations
	* and these keys must be unique across the entire application, like routes
	*/
	mutation: {
		BasicCreate: BasicCreateMutation,
		BasicUpdate: BasicUpdateMutation,
		BasicDelete: BasicDeleteMutation
	},
	/**
	* These properties are so the core router can setup the approriate endpoint
	* for a direct query against a resource
	*/
	instance_query: {
		name: 'Basic',
		path: '/3_0_1/Basic/:id',
		query: BasicInstanceQuery
	}
};
