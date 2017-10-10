const { authenticate } = require('feathers-authentication').hooks;

const addStudentToClass = require('../../hooks/add-student-to-class');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [addStudentToClass()],
    update: [addStudentToClass()],
    patch: [addStudentToClass()],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
