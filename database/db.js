// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017/webfor";
// // MongoClient.connect(url, function (err, db) {
// //   if (err) throw err;
// //   var dbo = db.db("webfor");
// //   var myobj = { name: "sylolol", password: "123456" };
// //   dbo.collection("webfor").insertOne(myobj, function(err, res) {
// //     if (err) throw err;
// //     console.log("文档插入成功");
// //     db.close();
// //   });
// // });
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("webfor");
//   dbo.collection("webfor").find().limit(2).toArray(function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
const db = require("monk")("localhost/webfor");
exports.users = db.get("webfor");
// exports.user = users.find({}, "name").then(docs => {
//   // only the name field will be selected
//   return docs;
// });
// console.log(exports.user);