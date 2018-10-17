const db = require("monk")("localhost/webfor");
exports.users = db.create("users");
