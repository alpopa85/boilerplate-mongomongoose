//require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { Schema } = mongoose;

console.log(process.env.MONGO_URI);

try{
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (err) {
  console.log('Cannot connect to DB', err);
}

const personSchema = new Schema({
  name:  String,
  age: Number,
  favoriteFoods: [ String ]
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let document = new Person({
    name:  "Joe Biden",
    age: 76,
    favoriteFoods: [ "Burger", "Goulash" ]
  });

  document.save((err, data) => {
    if (err) {
      console.log('Error!', err);
    } else {
      console.log('Object created');
      done(null, data);
    }
  });     
};

var arrayOfPeople = [
  {
    name:  "Joe Biden",
    age: 76,
    favoriteFoods: [ "Burger", "Goulash" ]
  },
  {
    name:  "Hillary Clinton",
    age: 66,
    favoriteFoods: [ "Burger", "Saghetti" ]
  },
  {
    name:  "Kamala Harris",
    age: 56,
    favoriteFoods: [ "Burger", "KFC" ]
  }
];
const createManyPeople = (arrayOfPeople, done) => {
    let people = Person.create(arrayOfPeople, (err, data) => {
      if (err) {
      console.log('Error!', err);
    } else {
      console.log('Multiple objects created');
      done(null, data);
    }
    });  
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
