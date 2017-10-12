const EVALUATE = 'EVALUATE';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
/*eslint-disable no-unused-vars*/

module.exports = function (options = {}) {
  return function updateStudent (hook) {
    return hook.app.service('students').get(hook.id)
      .then((student) => {
        const { type, payload } = hook.data;
        const user = hook.params.user;

        switch(type){

        case EVALUATE : {

          hook.data = {
            $push: { evaluations: payload }
          };

          return hook;
        }

        case UPDATE_STUDENT : {

          const oldBatchId = student.batchId;
          const studentId = student._id;

          if(!oldBatchId){
            hook.data = payload;
            return hook;
          }else{

            return hook.app.service('batches').patch(oldBatchId, {
              $pull: { studentIds : studentId }
            })
              .then(() => {
                return hook.app.service('students').patch(studentId, payload);
              })
              .then(() => { return hook;});
          }

        }

        default : {

          return hook;
        }
        }

      });
  };
};
