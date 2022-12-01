// const express = require('express');
import express,{Request,Response} from 'express'
const SearchOps = require('./SearchOps');
const Prefetch = require('./Prefetch');
const BookingConfirm = require('./BookingConfirm');
require('dotenv').config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;

app.use('/search', SearchOps);
app.use('/bookingConfirm', BookingConfirm);
app.get('/prefetch', Prefetch);
app.get('/', (req:Request, res:Response) => {
  res.status(200).send('welcome to the flight booking app ');
});

app.listen(port, () => {
  console.log('server started and listening on %s', port);
});
