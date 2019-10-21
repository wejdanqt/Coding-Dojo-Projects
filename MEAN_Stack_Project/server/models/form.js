var mongoose = require('mongoose');


const AnswerSchema = new mongoose.Schema({
    element_name: {type:String },
    answer: {type:String},
    created_at : {type: Date, default: Date.now },
    updated_at : {type: Date, default: Date.now },
 },{timestamps: true });


 const SubmitSchema = new mongoose.Schema({
    answers: [AnswerSchema],
    created_at : {type: Date, default: Date.now },
    updated_at : {type: Date, default: Date.now },
 },{timestamps: true });


const EelementSchema = new mongoose.Schema({
    type: {type:String , required:true},
    option:{type:String , required: false},
    require:{type:Boolean, default:false},
    created_at : {type: Date, default: Date.now },
    updated_at : {type: Date, default: Date.now },
 },{timestamps: true });

 const Element = mongoose.model('Element', EelementSchema);


 const FormSchema = new mongoose.Schema({
    title: {type:String , required:true},
    elements: [EelementSchema],
    submissions: [SubmitSchema],
    url: {type:String},
    created_at : {type: Date, default: Date.now },
    updated_at : {type: Date, default: Date.now },
 },{timestamps: true });

 const Form = mongoose.model('Form', FormSchema);


 const UserSchema = new mongoose.Schema({
    name: {type:String},
    email: {type: String},
    password: {type: String},
    forms:[FormSchema],
    created_at : {type: Date, default: Date.now },
    updated_at : {type: Date, default: Date.now },
 },{timestamps: true });

const User = mongoose.model('User', UserSchema);