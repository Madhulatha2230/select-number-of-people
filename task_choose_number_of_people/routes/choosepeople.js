var express = require('express');
var router = express.Router();





router.get('/',function(req,res){

res.render('choosePeople',{
	room:1,
adults:1,
children:0,
});

});



module.exports = router;