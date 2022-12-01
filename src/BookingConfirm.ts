import express,{Request,Response} from 'express';
const router = express.Router();
const findById = (req:Request, res:Response) => {
  return res.status(200).send('flight got');
};
router.post('/byId', findById);

module.exports = router;
