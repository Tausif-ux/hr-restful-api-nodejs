'use strict';
module.exports = function(app) {
  var controller = require('../controllers/controller');

  // Routes
  app.route('/employees')
    .get(controller.list_all_employees)
    .post(controller.create_an_employee);


  // app.route('/employees/:employeeId')
  //   .get(controller.read_an_employee)
  //   .put(controller.update_an_employee)
  //   .delete(controller.delete_an_employee);
};
