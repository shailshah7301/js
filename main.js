var express=require('express');
var app=express();//calls the express function and puts new Express Application

app.get('/',function(request,response){
	response.sendFile(__dirname+'/index.html');
});

var port= process.env.PORT||8080;
app.listen(port,function (req,res) {
	console.log("catch the action at http://localhost"+port);	// body...
})