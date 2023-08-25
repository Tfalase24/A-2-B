import 'dotenv/config';
import express from 'express';
import env from './util/validateEnv';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
  res.send('First Endpoint');
});

mongoose.connect(env.MONGO_CONNECTION_STRING).then(() => {
  console.log('Mongoose has connected');
  app.listen(env.PORT, () => {
    console.log('This server is listening');
  });
});
