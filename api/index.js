// Vercel serverless function wrapper for Uptime Kuma
// Using SQLite in /tmp directory (ephemeral - data resets between invocations)
// This is fine for simple use cases where persistence isn't required

// Set DATA_DIR to /tmp before requiring the server
process.env.DATA_DIR = process.env.DATA_DIR || '/tmp';

// Import server.js which exports the Express app
// Note: server.js initializes everything and exports app and io
// On Vercel, if setup is needed, it will also export setupApp
const serverModule = require('../server/server.js');

// Use setup app if it exists (when setup is needed on Vercel), otherwise use main app
const appToExport = serverModule.setupApp || serverModule.app;

// Export the appropriate app for Vercel
module.exports = appToExport;

