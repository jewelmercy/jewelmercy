var express = require('express');
var bodyPaser = require('body-parser');
var http = require('https');
var app = express();
app.use(bodyPaser.urlencoded({extended:true}));

app.get('/',function(_req,res){
  res.sendFile(__dirname+'/index.html');
});

var errorRes  ={
  errorStatus : "Failed",
  errorMsg: "Something went wrong"
};

app.post('/',function(req,res){
  //console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2= Number(req.body.num2);
  var result = num1+num2;
  if (num1 < 0 || num2< 0){
    res.status(400).send(errorRes);
  }
  else{
    res.send("The result is "+ result);
  }
 });

app.get('/quotes',function(_req,res){
  // http.get("https://api.kanye.rest",function(response){
   
  //   console.log('statusCode:',response.statusCode );
  //   //console.log('headers:', response.headers);
  //   var statuscode = response.statusCode
  //   response.on('data', (data) => {
  //     var data1= JSON.parse(data);
  //    console.log(data);
  //    res.write("<p>Quotes of the day</p>");
  //    res.write("<h1>"+data1['quote']+"</h1>");
  //    res.status(200).write("something went wrong");
  //   res.send();
    
  //   });
  
  // }).on('error', (e) => {
  //   console.error(e);
  // })
  res.statusCode=401;
  var errorRes  ={
    errorStatus : "Failed",
    errorMsg: "Something went wrong"
  };
  res.send(errorRes);
  });

function startUp(){
console.log('Server is running on port 3000');
}
app.listen(3000, startUp());