require('dotenv').config();
var express = require('express'); 
var app = express(); 
var test = require('./controllers/testcontroller')
var authTest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser'); 

sequelize.sync(); // tip: pass in {force: true} for resetting tables
app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use('/test', test)
app.use('/api/user', user);
app.use(require('./middleware/validate-session')); 
app.use('/authtest', authTest); 
// You could also write it this way without the require statement above.
//app.use('/api/user', require('./controllers/usercontrollers'));
app.use('/api/test', function(req, res){
  res.send("This is data from the /api/test endpoint. It's from the server.");
 });  

 app.listen(3000, function(){
    console.log('App is active.  You are using port 3000.')
}); 