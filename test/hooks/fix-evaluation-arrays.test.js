const assert = require('assert');
const fixEvaluationArrays = require('../../src/hooks/fix-evaluation-arrays');

describe('\'fix-evaluation-arrays\' hook', () => {
  it('runs the hook', () => {
    // A mock hook object
    const mock = {};
    // Initialize our hook with no options
    const hook = fixEvaluationArrays();

    // Run the hook function (which returns a promise)
    // and compare the resulting hook object
    return hook(mock).then(result => {
      assert.equal(result, mock, 'Returns the expected hook object');
    });
  });
});
