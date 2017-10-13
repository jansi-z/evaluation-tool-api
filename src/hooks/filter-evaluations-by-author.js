// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

function comparableObjectId(objectId) {
  return objectId.toString();
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function filterEvaluationsByAuthor (hook) {

    const user = hook.params.user;
    const evaluations = hook.result.data;

    if(!evaluations){
      
      return hook;
    }else{
      hook.result = evaluations.filter((evaluation) => { return comparableObjectId(evaluation.authorId) === comparableObjectId(user._id); });

      return hook;
    }
  };
};
