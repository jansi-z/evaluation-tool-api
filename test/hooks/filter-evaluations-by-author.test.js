const assert = require('assert');
const filterEvaluationsByAuthor = require('../../src/hooks/filter-evaluations-by-author');

describe('\'filter-evaluations-by-author\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = filterEvaluationsByAuthor();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
