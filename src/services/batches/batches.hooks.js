// const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');

const studentsSchema = {
  include: {
    service: 'students',
    nameAs: 'students',
    parentField: 'studentIds',
    childField: '_id'
  }
};

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
    all: [commonHooks.populate({ schema: studentsSchema })],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
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
