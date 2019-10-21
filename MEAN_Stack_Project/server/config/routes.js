
    const mongoose = require('mongoose'),
    // Form = mongoose.model('Form')
    User = mongoose.model('User')

    var form = require('../controllers/forms.js');

   module.exports = function(app){

    app.get('/view', (req, res) => {
        form.viewForms(req, res);
    }); 
 
    app.post('/new/user', (req, res) => {
        form.createUser(req, res);
    }); 

    app.post('/new/form', (req, res) => {
        form.createForm(req, res);
    }); 

    app.post('/new/element/:id', (req, res) => {
        form.createEelement(req, res);
    }); 
   }