const EVALUATE = 'EVALUATE';

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

        default : {

          return hook;
        }
        }

      });
  };
};
