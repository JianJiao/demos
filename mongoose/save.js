// var express = require("express");
// var path = require("path");
var mongoose = require("mongoose");
var app_root = __dirname;

// var app = express();

mongoose.connect("mongodb://localhost/mydb");

var Car = new mongoose.Schema({
	name: String
	,creator:String
	,year: String
	,time: {
		type: Date
		,"default": Date.now
	}
});

Car.pre("save", function(next){
	this.time = undefined;
	next();
});

var CarModel = mongoose.model("Car", Car);


var car = new CarModel({
	name: "yetanotehr"
	,creator: "me"
	,time: Date.now
});

car.save(function(err){
	if(err){
		console.log(err)
	}else{
		console.log("succeeded");
	}
});

// @note: the first arg is err!. The second one is car, if you mix them up,
// you'll find it is hard to find the bug
CarModel.findById("5585bc7fefc79d5104316684", function(err, car){
	if(err){
		console.log(err);
	}else{
		console.log(car);
		car.save(function(err){
			if(err){
				console.log("err" + err);
			}else{
				console.log("updated");
			}
		})
	}
});


