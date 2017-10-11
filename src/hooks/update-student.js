const EVALUATE = 'EVALUATE';

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
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
