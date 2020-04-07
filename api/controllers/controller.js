'use strict';


var mongoose = require('mongoose'),
EmployeeName = mongoose.model('EmployeeName');

exports.list_all_employees = function(req, res) {
  EmployeeName.find({}, function(err, employees) {
    if (err)
      res.send(err);
    res.json(employees);
  });
};




exports.create_an_employee = function(req, res) {
  var new_employee = new EmployeeName(req.body);
  new_employee.save(function(err, employee) {
    if (err)
      res.send(err);
    res.json(employee);
  });
};