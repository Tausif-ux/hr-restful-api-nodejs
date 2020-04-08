'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanyDetailsSchema = new Schema({
  companyId: Number,
  description: String,
  shortDescription: String
});
var CompanyDetails = mongoose.model('CompanyDetails', CompanyDetailsSchema);
module.exports.CompanyDetails = CompanyDetails; 

var EmployeeDetailsSchema = new Schema({
  personalId: Number,
  employeeId: Number,
  companyId: { type: Number, ref: CompanyDetails },
  dob: Date,
  gender: String,
  email: String,
  phoneNumber: Number,
  officialEmail: String
});
EmployeeDetailsSchema.index({ employeeId: 1, companyId: 1}, { unique: true });
var EmployeeDetails = mongoose.model('EmployeeDetails', EmployeeDetailsSchema);
module.exports.EmployeeDetails = EmployeeDetails;

var EmployeeNameSchema = new Schema({
  personalId: { type: Number, ref: EmployeeDetails },
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
  effectiveDate: {
    type: Date,
    default: Date.now
  }
});
EmployeeNameSchema.index({ personalId: 1, effectiveDate: 1 }, { unique: true });
module.exports.EmployeeName = mongoose.model('EmployeeName', EmployeeNameSchema);


var JobDetailsSchema = new Schema({
  personalId: { type: Number, ref: EmployeeDetails },
  effectiveDate: Date,
  effectiveSequence: Number,
  status: String,
  designation: String,
  departmentId: Number,
  actionReason: String
});
JobDetailsSchema.index({ personalId: 1, effectiveDate: 1, effectiveSequence: 1 }, { unique: true });
module.exports.JobDetails = mongoose.model('JobDetails', JobDetailsSchema);

