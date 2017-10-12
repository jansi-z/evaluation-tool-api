
/*eslint-disable no-unused-vars*/

module.exports = function (options = {}) {
  return function fixEvaluationArrays (hook) {
    if (hook.method === 'find') {
      const hookResult = hook.result;
      const studentArray = [{ name: 'Henk', evaluations: { eval: 1 }, }, { name: 'Piet', evaluations: { eval: 2 }}];
      hook.result = hookResult.map((student) => (Object.assign(student, {evaluations: student.evaluations instanceof Array ? student.evaluations : [student.evaluations]})));

    } else {
      hook.result = Object.assign(hook.result, {
        evaluations: hook.result.evaluations instanceof Array ? hook.result.evaluations : [hook.result.evaluations]
      });
    }
    return Promise.resolve(hook);
  };
};
