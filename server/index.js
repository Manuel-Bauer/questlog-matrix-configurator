const express = require("express");
const fs = require('file-system');

const countries = ["australien", "china", "deutschland", "griechenland", "hawaii", "island", "italien", "kanada", "usa"]

function extractPoints(country) {
  const data = fs.readFileSync(`./server/img/${country}.svg`, {encoding: "utf8", flag:"r"})
  return data.match(/\d{1,2}[\.|\d|\s|,]{30,}\d/g)
}

const combs = [];

countries.forEach(country => {
  combs.push({
    country: country, 
    points: extractPoints(country)
  })
})

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({message: combs});
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

