const express = require("express");
const PORT = 25000;
const beers = require("./beers");

const app = express();
console.log(beers);

app.get("/", (request, response) => {
  response.send("this is my first route");
});

app.listen(PORT, () => {
  console.log(`user connected on port: ${PORT}`);
});
``;
