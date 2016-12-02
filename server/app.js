const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.listen(3000, function() {
  console.log('listening');
})

const participants = [
  {
    "name": "Kevin",
    "age":28,
    "crunchTotal": 1
  },
  {
    "name": "Tyler",
    "age": 33,
    "crunchTotal": 1000
  }
];

app.get('/participants', function(req,res){
  res.send(participants);
})

app.post('/participants', function(req,res){
  var newParticipant = {
    name:req.body.name,
    age:req.body.age,
    crunchTotal:req.body.crunchTotal
  }
  participants.push(newParticipant);
  res.json(participants);
})
