var express = require('express');
var router = express.Router();
var myFolder = require('./listFiles.js');


/* GET home page. */
router.get('/my', function(req, res, next) {
  res.render('index', { title: 'Sid' });
});

router.post('/', function (req, res) {
  res.send('Got a POST request')
})

router.get('/', function (req, res,next) {
  if(req.query.path == "" || req.query.path == null){
    next();
  }
  var result = myFolder.folderReaderSync(req.query.path);
  console.log("result -- "+result);
  res.render('index1', { title: 'Sid' , fileList:result});
})

router.get('/', function (req, res) {

  var result = myFolder.folderReaderSync(".");
  console.log("result -- "+result);
  res.render('index1', { title: 'Sid' , fileList:result});
})

module.exports = router;
