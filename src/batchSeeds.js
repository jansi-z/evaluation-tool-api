/* eslint-disable no-console */

const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = {
  name: 'Teacher McTeachface',
  email: 'teacher@codaisseur.com',
  password: 'abcd1234'
};

const batches = [

  {
    number: 1,
    startDate: new Date(2017, 0, 1),
    endDate: new Date(2017, 2, 1),
    studentIds: []
  },

  {
    number: 2,
    startDate: new Date(2017, 1, 1),
    endDate: new Date(2017, 3, 1),
    studentIds: []
  },
];

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user)
  .then(() => {
    feathersClient.authenticate({
      strategy: 'local',
      email: user.email,
      password: user.password
    })
      .then(() => {
        batches.map((batch) => {
          feathersClient.service('batches').create(batch)
            .then((result) => {
              console.log('Batch seeded...', result.title);
            }).catch((error) => {
              console.error('Error seeding batch!', error.message);
            });
        });
      })
      .catch(function(error){
        console.error('Error authenticating!', error);
      });
  })
  .catch(function(error) {
    console.error('Error creating user!', error);
  });
