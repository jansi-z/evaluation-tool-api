
/*eslint-disable no-unused-vars*/

function returnCurrentColor(studentEvaluations){
  if(!studentEvaluations){
    return 'red';
  }else if (studentEvaluations.includes(undefined)) {
    return 'red';
  }else if (studentEvaluations.includes(null)) {
    return 'red';
  }else{
    const currentEvaluation = studentEvaluations[(studentEvaluations.length -1)];
    return currentEvaluation.color;
  }
}

module.exports = function (options = {}) {
  return function studentCurrentColor (hook) {
    if (!hook.result.data){
      return hook;
    } else if (hook.method === 'find'){

      hook.result.data = hook.result.map((student) => (
        Object.assign(student, { currentColor: returnCurrentColor(student.evaluations) }
        ))
      );
      return hook;
    } else {

      hook.result.currentColor = returnCurrentColor(hook.result.evaluations);

      return hook;
    }
  };
};
