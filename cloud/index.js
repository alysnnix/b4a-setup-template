const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 1337;

const mongoUri = 'mongodb://root:example@mongodb:27017';

app.get('/', async (req, res) => {
  try {
    const client = new MongoClient(mongoUri);
    await client.connect();
    const db = client.db('test');
    const collection = db.collection('example');
    const data = await collection.find({}).toArray();
    res.json(data);
    await client.close();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Cloud Code server running on http://localhost:${port}`);
});
