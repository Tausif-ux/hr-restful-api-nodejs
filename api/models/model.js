'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: 'Kindly enter the First Name of the employee'
  },
  middleName: {
    type: String,
    required: 'Kindly enter the Middle Name of the employee'
  },
  lastName: {
    type: String,
    required: 'Kindly enter the Last Name of the employee'
  },
  EffectiveDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);