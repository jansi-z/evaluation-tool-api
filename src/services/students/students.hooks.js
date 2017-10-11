const { authenticate } = require('feathers-authentication').hooks;
const addStudentToBatch = require('../../hooks/add-student-to-batch');
const commonHooks = require('feathers-hooks-common');

const batchSchema = {
  include: {
    service: 'batches',
    nameAs: 'batch',
    parentField: 'batchId',
    childField: '_id'
  }
};

const updateStudent = require('../../hooks/update-student');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [updateStudent()],
    patch: [updateStudent()],
    remove: []
  },

  after: {
    all: [commonHooks.populate({schema: batchSchema})],
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
