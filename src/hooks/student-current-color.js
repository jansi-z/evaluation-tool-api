// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

function returnCurrentColor(studentEvaluations){
  if(!studentEvaluations){
    return 'red';
  }else{
    const currentEvaluation = studentEvaluations[(studentEvaluations.length -1)];
    return currentEvaluation.color;
  }
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function studentCurrentColor (hook) {
    if (hook.method === 'find'){

      hook.result.data = hook.result.map((student) => (
        Object.assign(student, { currentColor: returnCurrentColor(student.evaluations) }
        ))
      );
      return hook;
    } else {

      hook.result.currentColor = returnCurrentColor(hook.result.evaluations);

      return hook;
    }

    return Promise.resolve(hook);
  };
};
