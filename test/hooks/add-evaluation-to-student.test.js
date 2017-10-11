const assert = require('assert');
const addEvaluationToStudent = require('../../src/hooks/add-evaluation-to-student');

describe('\'add-evaluation-to-student\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = addEvaluationToStudent();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
