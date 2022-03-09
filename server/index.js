const express = require('express');
const fs = require('file-system');
const cors = require('cors');

const countries = [
  'australien',
  'china',
  'deutschland',
  'griechenland',
  'hawaii',
  'island',
  'italien',
  'kanada',
  'usa',
];

function extractPoints(country) {
  const data = fs.readFileSync(`./img/${country}.svg`, {
    encoding: 'utf8',
    flag: 'r',
  });
  return data.match(/\d{1,2}[\.|\d|\s|,]{30,}\d/g);
}

const combs = [];

countries.forEach((country) => {
  combs.push({
    country: country,
    points: extractPoints(country),
  });
});

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/api', (req, res) => {
  res.json({ message: combs });
});

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  ('');
});
