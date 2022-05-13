var express = require('express');
var router = express.Router();
const loginCheck = require("../module/logincheck")
const upload = require("../module/imageUpload");

router.get('/', loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!!",
  });
});

router.post('/upload', upload.single('image'), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    massage: "upload success!!",
  });
});


/*
let arr = [];

router.get('/read', (req, res) => {
  res.status(200).json({
    message: "read success",
  });
});

//post method

router.post('/create', (req, res) => {
  const { data } = req.body;
  arr.push(data);
  res.status(200).json({
    message: "create success",
    result: arr,
  });
});

//put method

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr,
  });
});

//delete method

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr,
  })
});
*/

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/main', (req, res) => {
//   const data = req.body.data;
//   res.send("문자열이 응답됩니다!!")
//   // res.json({
//   //   message: "main success!!"
//   // }); //제이슨 형태 객체 응답
// });

module.exports = router;
