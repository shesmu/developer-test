import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('API server root');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
