
/*eslint-disable no-unused-vars*/

module.exports = function (options = {}) {
  return function addStudentToBatch (hook) {
    
    const studentId = hook.result._id;
    const batchId = hook.data.batchId;

    if(!batchId) { return hook; }

    else {
      return hook.app.service('batches').patch(batchId, {
        $addToSet: { studentIds: studentId }
      }).then(() => {
        return hook;
      });
    }
  };
};
