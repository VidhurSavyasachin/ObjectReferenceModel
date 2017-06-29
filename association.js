	mongoose	= require("mongoose"),
	user 		= require("./views/user.js"),
	post		= require("./views/post.js");

mongoose.connect("mongodb://localhost/auth_demo_app");
user.findOne({name:"Vidhur Savyasachin"}).populate("posts").exec(function(err,comments){
	if(err){
		console.log(err);
	}else{
		console.log(comments);
	}
});















