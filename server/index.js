const { config } = require("dotenv");
var Express=require("express");
var app=Express();
const dotenv.config();
var MongoClient=require("mongo").MongoClient();



const port="8000";

app.get("/login",(req,res)=>{
   const client= new MongoClient(uri);
   client.connect();
   var database=client.db("app-data");
   var users=database.collection("users");
   

})

app.listen(port);