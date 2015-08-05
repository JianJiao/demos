/*Define dependencies.*/

var express=require("express");

var app=express();

/*Handling routes.*/

app.get('/',function(req,res){
	res.end("3");
});

app.post('/', function(req, res){
	res.end("5");
});


/*Run the server.*/
app.listen(8080,function(){
    console.log("Working on port 8080");
});