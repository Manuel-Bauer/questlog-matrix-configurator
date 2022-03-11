const express = require('express');
const fs = require('file-system');
const cors = require('cors');

// Extracts SVG coordinates for each country
function extractCoords(country) {
  const data = fs.readFileSync(`./server/img/countries/${country}.svg`, {
    encoding: 'utf8',
    flag: 'r',
  });
  return data.match(/\d{1,2}[\.|\d|\s|,]{30,}\d/g);
}

const countries = [];
const combs = [];

// Reads img folder and extracts country names to countries array
fs.readdirSync('./server/img/countries').forEach((file) => {
  countries.push(file.split('.')[0]);
});

// Loops through countries array and pushes country name and country svg coordinates to combs object
countries.forEach((country) => {
  combs.push({
    country: country,
    coords: extractCoords(country),
  });
});

// Set up express
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.get('/api', (req, res) => {
  res.json({ message: combs });
});

app.post('/data', (req, res) => {
  res.send(req.body);

  // Create timestamp
  let date = new Date();
  const timestamp = `${date.getYear() + 1900}-${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;

  // Create unique filename for result
  let filename = `./server/img/matrix/matrix-${timestamp}.svg`;

  // Copy base matrix
  fs.copyFileSync('./server/img/matrix/matrix.svg', filename);

  // Append svg data of newly created SVG
  // See if i can refactor or explain
  fs.appendFileSync(filename, req.body.element.split(`"preserve">`)[1]);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  ('');
});
