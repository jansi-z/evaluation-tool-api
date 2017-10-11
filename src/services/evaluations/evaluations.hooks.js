

const addEvaluationToStudent = require('../../hooks/add-evaluation-to-student');

module.exports = {
  before: {
    all: [],
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
    create: [addEvaluationToStudent()],
    update: [addEvaluationToStudent()],
    patch: [addEvaluationToStudent()],
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
