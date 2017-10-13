

const addEvaluationToStudent = require('../../hooks/add-evaluation-to-student');

const filterEvaluationsByAuthor = require('../../hooks/filter-evaluations-by-author');

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
    find: [filterEvaluationsByAuthor()],
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
