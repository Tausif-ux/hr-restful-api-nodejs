var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  models = require('./api/models/model'),
  bodyParser = require('body-parser');

//created models loading here 
models.EmployeeDetails,
models.EmployeeName,
models.CompanyDetails,
models.JobDetails;

  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hr_api'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware to validate response for error
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);