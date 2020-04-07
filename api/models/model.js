'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeDetailsSchema = new Schema({
  employeeId: Number,
  companyId: Number,
  dob: Date,
  gender: String,
  email: String,
  phoneNumber: Number,
  officialEmail: String
});

var EmployeeNameSchema = new Schema({
  firstName: {
    type: String,
    required: 'Kindly enter the First Name of the employee'
  },
  middleName: {
    type: String,
    // required: 'Kindly enter the Middle Name of the employee'
  },
  lastName: {
    type: String,
    // required: 'Kindly enter the Last Name of the employee'
  },
  EffectiveDate: {
    type: Date,
    default: Date.now
  },
  details: [ EmployeeDetailsSchema ]
});

module.exports = mongoose.model('EmployeeName', EmployeeNameSchema);
module.exports = mongoose.model('EmployeeDetails', EmployeeDetailsSchema);

