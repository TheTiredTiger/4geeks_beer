const express = require("express");
const PORT = 25000;
const beers = require("./beers");

const app = express();
// console.log(beers);

app.get("/", (request, response) => {
  response.send("this is my first route");
});

app.get("/beers", (req, res) => {
  res.send(beers)
})

app.get("/beers/:id", (req, res) => {
  let id = req.params.id;
  res.send(beers.filter((beer) => {
    return beer.id === parseInt(id)
  }))
  
})

app.get("/beer/:name", (req, res) => {
  let name = req.params.name;
  console.log(name)
  let something = beers.filter((beer) => {
    return beer.name === name
  })
  res.send(JSON.stringify(something))
})



app.listen(PORT, () => {
  console.log(`user connected on port: ${PORT}`);
});
``;