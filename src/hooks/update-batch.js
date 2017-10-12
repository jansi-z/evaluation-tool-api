const RANDOM_STUDENT = 'RANDOM_STUDENT';

/*eslint-disable no-unused-vars*/

function selectRedStudent(student){
  return student.currentColor === 'red';
}

function selectYellowStudent(student){
  return student.currentColor === 'yellow';
}

function selectGreenStudent(student){
  return student.currentColor === 'green';
}

function randomStudent(students){
  const redStudents = students.filter(selectRedStudent);
  const yellowStudents = students.filter(selectYellowStudent);
  const greenStudents = students.filter(selectGreenStudent);
  const randomNumber = Math.floor(Math.random() * 100);

  if(randomNumber <= 17){
    const green = greenStudents[Math.floor(Math.random() * greenStudents.length)];
    return green === undefined ? (randomStudent(students)) : green;
  } else if (randomNumber <= 50) {
    const yellow = yellowStudents[Math.floor(Math.random() * yellowStudents.length)];
    return yellow === undefined ? (randomStudent(students)) : yellow;
  } else if (randomNumber <= 100) {
    const red = redStudents[Math.floor(Math.random() * redStudents.length)];
    return red === undefined ? (randomStudent(students)) : red;
  }
}

module.exports = function (options = {}) {
  return function updateBatch (hook) {
    return hook.app.service('batches').get(hook.id)
      .then((batch) => {
        const { type, payload } = hook.data;
        const user = hook.params.user;

        switch(type){

        case RANDOM_STUDENT : {

          const students = hook.data.payload;
          
          hook.data = {
            $set: { randomStudent: randomStudent(students).name }
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
