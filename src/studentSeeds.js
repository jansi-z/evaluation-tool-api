/* eslint-disable no-console */

const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const batch1 = '59dc9723bcc6f67cd8f60952';
const batch2 = '59dc9723bcc6f67cd8f60953';

const user = {
  name: 'Albert Einstein',
  email: 'teacher2@codaisseur.com',
  password: 'abcd1234'
};

const students = [
  {
    name: 'Emma Watson',
    photo: 'https://previews.123rf.com/images/alexraths/alexraths1208/alexraths120800019/14823926-Beautiful-student-girl-with-books-Isolated-on-white-Stock-Photo.jpg',
    classId: batch1,
    evaluations: []
  },

  {
    name: 'Olivia Newton John',
    photo: 'https://previews.123rf.com/images/alexraths/alexraths1208/alexraths120800019/14823926-Beautiful-student-girl-with-books-Isolated-on-white-Stock-Photo.jpg',
    classId: batch2,
    evaluations: []
  },

  {
    name: 'Ava McLaren',
    photo: 'https://previews.123rf.com/images/alexraths/alexraths1208/alexraths120800019/14823926-Beautiful-student-girl-with-books-Isolated-on-white-Stock-Photo.jpg',
    classId: batch1,
    evaluations: []
  },

  {
    name: 'Isabella Caramella',
    photo: 'https://previews.123rf.com/images/alexraths/alexraths1208/alexraths120800019/14823926-Beautiful-student-girl-with-books-Isolated-on-white-Stock-Photo.jpg',
    classId: batch2,
    evaluations: []
  },

  {
    name: 'Sophia Loren',
    photo: 'https://previews.123rf.com/images/alexraths/alexraths1208/alexraths120800019/14823926-Beautiful-student-girl-with-books-Isolated-on-white-Stock-Photo.jpg',
    classId: batch1,
    evaluations: []
  },

  {
    name: 'Liam Neeson',
    photo: 'http://studentsforhigher.org/images/guy-with-books.jpg',
    classId: batch2,
    evaluations: []
  },

  {
    name: 'Noah Shipwright',
    photo: 'http://studentsforhigher.org/images/guy-with-books.jpg',
    classId: batch1,
    evaluations: []
  },

  {
    name: 'Lucas McGeorge',
    photo: 'http://studentsforhigher.org/images/guy-with-books.jpg',
    classId: batch2,
    evaluations: []
  },

  {
    name: 'Mason Windu',
    photo: 'http://studentsforhigher.org/images/guy-with-books.jpg',
    classId: batch1,
    evaluations: []
  },

  {
    name: 'Logan Lupide',
    photo: 'http://studentsforhigher.org/images/guy-with-books.jpg',
    classId: batch2,
    evaluations: []
  }
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
        students.map((student) => {
          feathersClient.service('students').create(student)
            .then((result) => {
              console.log('Student seeded...', result.title);
            }).catch((error) => {
              console.error('Error seeding classId!', error.message);
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
