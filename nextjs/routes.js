const routes = require('next-routes');

// Setup router
module.exports = routes()
	.add('index', '/')
	.add('branches')
	.add('projects')
	.add('Projects')
	.add('branch', '/branches/:slug')
	.add('project', '/projects/:slug')
