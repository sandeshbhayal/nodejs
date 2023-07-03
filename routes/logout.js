var express = require('express');
var router = express.Router();
 
/* GET users listing. */
router.get('/', function(req, res, next) {
     req.session.destroy(function(err){
        if(err){ throw err ;
        }else{
            console.log(req.session);
            res.end();
        } 
     });
    res.redirect('/'); 
      
});

module.exports = router;