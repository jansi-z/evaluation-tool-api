// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addStudentToBatch (hook) {

    const studentId = hook.result._id;
    const batchId = hook.data.batchId;

    if(!batchId) { return hook; }

    else {
      return hook.app.service('batches').patch(batchId, {
        $addToSet: { studentIds: studentId }
      }).then((result) => {
        console.log(result);
        return hook;
      });
    }
  };
};
