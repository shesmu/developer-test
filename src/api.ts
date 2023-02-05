import express from 'express';
import { flights, schedule } from './data';
import { validateDate } from './utils';

const app = express();

const filterFlights = (date: string) => {
  return schedule.filter((elem) => {
    return elem.date === date ? elem.flight : ""
  }).map((elem) => {
    return flights[elem.flight]
  })
}

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', "true");
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (_req, res) => {
  res.send('API server root');
});

app.post('/getFlightsByDate', (_req, res) => {
  const {body: { date }} = _req

  validateDate(date) 
  ? res.send(filterFlights(_req.body.date))
  : res.send([])
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
