import { Address, Ride, Stop, User } from './models/index.mjs';
import './database/seeds/seed.mjs';
import express from 'express';

const app = express();

app.use(express.static('dist'));
app.get('/api/getTrips', async (req, res) => {
  const trips = await Ride.findAll({
    include: [
      User,
      {
        model: Stop,
        include: [Address],
      },
    ],
  });

  res.send({ trips });
});
app.get('/api/getTripById/:id', async (req, res) => {
  const trip = await Ride.findOne({
    where: { id: req.params.id },
    include: [
      User,
      {
        model: Stop,
        include: [Address],
      },
    ],
  });

  res.send(trip);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
