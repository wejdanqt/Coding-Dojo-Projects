const mongoose = require('mongoose'),
User = mongoose.model('User')
Form = mongoose.model('Form');
Element = mongoose.model('Element');

module.exports = {

    viewForms: function(req, res) {
        Form.find({} , function(err , data){
            if(err){
                console.log("Error")
            }
            else{
                res.json(data)
            }
        })
    },

    createUser: function (req, res) {
        console.log("____")
        const user = new User({ name: req.body.name, email: req.body.email, password: req.body.password });
        user.save(function (err, data) {
            if (err) {
                console.log("Error")
            } else {
                res.json(data)
            }
        })
    },

    createForm: function (req, res) {
        console.log("____")
        const form = new Form({ title: req.body.title});
        form.save(function (err, data) {
            if (err) {
                console.log("Error" , err)
            } else {
                res.json(data)
            }
        })
    },

    createEelement: function (req, res) {
        console.log("____")
        Element.create(req.body, function (err, data) {
            if (err) {
                console.log("Error" , err)
            }
            else {
                Form.findOneAndUpdate({ _id: req.params.id }, { $push: { elements: data } }, function (err, data) {
                    if (err) {
                        console.log("Error" , err)
                    }
                    else {
                        res.json(data)
                    }
                })
            }
        })
    
    }


    

};