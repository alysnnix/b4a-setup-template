require('dotenv').config({ path: '../.env' });
const express = require('express');
const { ParseServer } = require('parse-server');

const app = express();

const api = ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev',
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  serverURL: 'http://localhost:1337/parse',
  allowClientClassCreation: true,
  allowExpiredAuthDataToken: true,
  encodeParseObjectInCloudFunction: false,
  cloud: '../cloud/main.js',
});

app.use('/', express.static('../public'));
app.use('/parse', api.app);

const port = 1337;
app.listen(port, () => {
  console.log(`Parse Server running at http://localhost:${port}/parse`);
});
