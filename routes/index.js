var express = require('express');
var fs      = require('fs');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('./views/index.hbs' , function(err,data){
      if(err){
        res.writeHead(404);
        res.write('Page Not Found');
        res.end();
      }else{
        res.writeHead(200 , {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
      }
    }); 
});
 
router.post('/index/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;  
    if(username == 'sandesh' && password == '123456')
    {   
        var sess      = req.session;
        sess.userName = 'sandesh bhayal' ;
        sess.userMail = 'sandeshbhayal@gmail.com' ;
        sess.userMobl = '9993622117' ;
        sess.userAddr = '09 Vasant Vihar colony Indore | Madhya Pradesh' ;  
        res.redirect('/Users');
    }else{
        res.redirect('/'); 
    }
}); 

module.exports = router;