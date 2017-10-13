const assert = require('assert');
const updateBatchOnStudentDeletion = require('../../src/hooks/update-batch-on-student-deletion');

describe('\'update-batch-on-student-deletion\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = updateBatchOnStudentDeletion();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
