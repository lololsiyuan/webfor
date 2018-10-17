var express = require('express');
var router = express.Router();
var users = require("../database/add").users;

/* GET users listing. */
router.get('/', function (req, res, next) {
  users.insert({ name: "foo" }).then(docs => {
    // only the name field will be selected
    console.log(docs);
    var _data = {
      status: 200,
      data: docs
    }
    res.send(_data);
  });
});

module.exports = router;
