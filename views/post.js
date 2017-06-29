var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
	author:String,
	comment:String
	
});
module.exports = mongoose.model("post",postSchema);