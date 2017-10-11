
/*eslint-disable no-unused-vars*/

module.exports = function (options = {}) {
  return function addEvaluationToStudent (hook) {

    const evaluationId = hook.result._id;
    const studentId = hook.data.studentId;

    if(!studentId) { return hook; }

    else {
      return hook.app.service('students').patch(studentId, {
        $addToSet: { evaluationIds: evaluationId }
      }).then(() => {
        return hook;
      });
    }
  };
};
