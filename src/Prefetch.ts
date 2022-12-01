import rawdata from './data.json';
import {Response,Request} from 'express';
const prefetch = (req:Request, res:Response) => {
  
  let sources:string[] = [],
    destinations:String[] = [];
  rawdata.forEach((flight) => {
    sources.push(flight.depatureDestination);
    destinations.push(flight.arrivalDestination);
  });
  let sources_set:String[] = [...new Set(sources)];
  let destinations_set:String[] = [...new Set(destinations)];
 
  res.status(200).send({sources_set,destinations_set});
};

module.exports = prefetch;
