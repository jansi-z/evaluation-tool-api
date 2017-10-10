const users = require('./users/users.service.js');
const classes = require('./classes/classes.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(classes);
};
