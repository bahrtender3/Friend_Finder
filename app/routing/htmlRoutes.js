var express = require('express')
var app = express.Router();
var path = require('path')


module.exports = function(app){

    // home
    app.get('/',function(req,res){
        res.sendFile(path.join(__dirname,'../../app/public/home.html'));
    })

    // survey
    app.get('/survey', function(req,res){
        res.sendFile(path.join(__dirname, '../../app/public/survey.html'))
    })

    
    
    
    // What happens in an error
    app.get('*',function(req, res){
        res.status(404).sendFile(path.join(__dirname, '../../app/public/404.html'))
    });

}


