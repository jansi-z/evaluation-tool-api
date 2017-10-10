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

const classes = [

  {
    name: 'Batch #1',
    startDate: new Date(2017, 0, 1),
    endDate: new Date(2017, 2, 1),
    studentIds: []
  },

  {
    name: 'Batch #2',
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
        classes.map((batch) => {
          feathersClient.service('classes').create(batch)
            .then((result) => {
              console.log('Class seeded...', result.title);
            }).catch((error) => {
              console.error('Error seeding class!', error.message);
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
