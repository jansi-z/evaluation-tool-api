// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addEvaluationToStudent (hook) {

    const evaluationId = hook.result._id;
    const studentId = hook.data.studentId;

    if(!studentId) { return hook; }

    else {
      return hook.app.service('students').patch(studentId, {
        $addToSet: { evaluationIds: evaluationId }
      }).then((result) => {
        console.log(result);
        return hook;
      });
    }
  };
};
