var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// ich glaub' das Ding brauche ich nicht, das der client woanders läuft..
// app.use(express.static('client'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var members = [
  {
    name: 'Walter Müller',
    date: '2018-05-01',
    id: '1',
    age: 57,
    gender: 'male',
    hobbies: ['reading', 'drinking beer']
  }
];
var id = 1;

app.get('/members', function(req, res) {
  res.json(members);
});

app.get('/members/:id', function(req, res) {
  var member = _.find(members, { id: req.params.id });
  res.json(member || {});
});

app.post('/members', function(req, res) {
  var member = req.body;
  id++;
  member.id = id + '';

  members.push(member);

  res.json(member);
});

app.put('/members/:id', function(req, res) {
  var update = req.body;
  if (update.id) {
    delete update.id;
  }

  var member = _.findIndex(members, { id: req.params.id });
  if (!members[member]) {
    res.send();
  } else {
    var updatedMember = _.assign(members[member], update);
    res.json(updatedMember);
  }
});

app.delete('/members/:id', function(req, res) {
  var member = _.findIndex(members, { id: req.params.id });
  if (!members[member]) {
    res.send();
  } else {
    var deletedMember = members[member];
    members.splice(member, 1);
    res.json(deletedMember);
  }
});

app.listen(3000);

console.log('on port 3000');
