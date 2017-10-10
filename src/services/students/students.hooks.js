const { authenticate } = require('feathers-authentication').hooks;

const addStudentToBatch = require('../../hooks/add-student-to-batch');

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
    create: [addStudentToBatch()],
    update: [addStudentToBatch()],
    patch: [addStudentToBatch()],
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
