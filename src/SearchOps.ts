import express,{Request,Response} from 'express';
import rawdata from './data.json'
const router = express.Router();


const findById = (req:Request, res:Response) => {
  const { id } = req.body;
  console.log(req.body);
  let resdata = rawdata.filter((flight:any) => flight.flight_id == id);
  return res.status(200).send(resdata);
};
const findByStd = (req:Request, res:Response) => {
  const { source, destination } = req.body;
  let resdata = rawdata.filter(
    (flight:any) =>
      flight.depatureDestination == source &&
      flight.arrivalDestination == destination
  );
  console.log(req.body)
  return res.status(200).send(resdata);
};
router.post('/byId', findById);
router.post('/byStD', findByStd);

module.exports = router;
