const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

const bikeData = require("./bikeData")

app.use(express.json());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Find My MTB';
app.locals.bikes = bikeData;


app.get('/', (req, res) => {
  res.send(`Welcome to ${app.locals.title}. We have ${app.locals.bikes.length} bikes available.`);
  console.log('app', app)
});
// could do it this way too 
// const port = app.get('port')
// app.listen(port, ()=> {
//})
const port = app.get('port')
app.listen(port, () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${port}.`
  );
});

app.get('/api/v1/bikes', (req, res) => {
    const bikes = app.locals.bikes;
    if (!bikes) {
    return res.sendStatus(404);
  }
  res.status(200).json({ bikes })
  });

  app.patch('/api/v1/bikes/:id', (req, res) => {
    const { id } = req.params;
    const numId = parseInt(id);
    const bike = app.locals.bikes.find(bike => bike.id === numId);
    if (!bike) {
      return res.sendStatus(404);
    }
    bike.favorite = !bike.favorite;
    res.status(200).json({ bike });
  });

app.get('/api/v1/bikes/:id', (req, res) => {
  const { id }  = req.params;
  const numId = parseInt(id)
  const bike = app.locals.bikes.find(bike => bike.id === numId);
  if (!bike) {
    return res.sendStatus(404);
  }
  res.status(200).json({ bike })
})

app.post('/api/v1/bikes', (req, res) => {
    const id = Date.now();
    const favorite = true
    const bike = req.body;
  
    for (let requiredParameter of ['make', 'model', 'suspensionTravel', 'wheelSize', 'ridingStyle', 'price']) {
      if (!bike[requiredParameter]) {
        res
          .status(422)
          .send({ error: `Expected format: { make: <String> model: <String> suspensionTravel: <Number> wheelSize: <String> riderAbility: <String> price: <Number>. You're missing a "${requiredParameter}" property.` });
        return
      }
    }
    const { make, model, suspensionTravel, wheelSize, riderAbility, price, imageUrl } = bike;
    app.locals.bikes.push({ id, favorite, make, model, suspensionTravel, wheelSize, riderAbility, price, imageUrl});
    res.status(201).json({ id, make, model, suspensionTravel, wheelSize, riderAbility, price, imageUrl, favorite});
  });

  
  
