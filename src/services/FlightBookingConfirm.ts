import express, { Request, Response } from 'express';
const router = express.Router();

const generateTickedID = (length: Number) => {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
const confirmBooking = (req: Request, res: Response) => {
  const { personalData, flight, ticketData } = req.body;
  let tkts = ticketData.map((tkt: any) => {
    let id = generateTickedID(10);
    return { ...tkt, ticketId: id, status: 'confirmed' };
  });
  res.status(200).send(tkts);
};

export default {
  confirmBooking,
};
