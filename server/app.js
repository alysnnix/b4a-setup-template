require('dotenv').config({ path: '../.env' });
const express = require('express');
const { ParseServer } = require('parse-server');

const app = express();

const api = ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev', // Replace with your MongoDB URI
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY, // Keep this key secret
  serverURL: 'http://localhost:1337/parse', // Replace with your server URL
  allowClientClassCreation: true, // Explicitly set to true to avoid deprecation warning
  allowExpiredAuthDataToken: true, // Explicitly set to true to avoid deprecation warning
  encodeParseObjectInCloudFunction: false, // Explicitly set to false to avoid deprecation warning
  cloud: '../cloud/main.js',
});

// Serve static files from the "public" directory at the root
app.use('/', express.static('../public'));

app.use('/parse', api.app); // Fix middleware initialization

const port = 1338;
app.listen(port, () => {
  console.log(`Parse Server running at http://localhost:${port}/parse`);
});
