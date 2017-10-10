// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function addStudentToClass (hook) {
    const studentId = hook.result._id;
    const classId = hook.data.classId;

    return hook.app.service('classes').patch(classId, {
      $addToSet: { studentIds: studentId }
    }).then((result) => {
      console.log(result);
      return hook;
    });
    // return Promise.resolve(hook);
  };
};
