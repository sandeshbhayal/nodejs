var express = require('express');
var router = express.Router();
 
/* GET users listing. */
router.get('/', function(req, res, next) {  
    var sess      = req.session;
    if(sess.userName){
      res.render('dashboard' , {title : 'DASHBOARD' , SessionData:req.session});
    }else{
        res.redirect('/');
    }
});

module.exports = router;