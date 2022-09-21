
var bcrypt=require("bcrypt");
var Express = require("express");
var app = Express();
require ("dotenv").config();
app.use(Express.json());
const uri=process.env.URI;
var MongoClient = require("mongodb").MongoClient;
const port = "8000";




//Login 
app.post("/login",async (req, res) => {
   console.log("LOGIN REQUEST")
  const client = new MongoClient(uri);
  const{email,password}=req.body;
  const senitizedEmail=email.toLowerCase();
  console.log(email);
 await  client.connect();
 try{
  var database = client.db("app-data");
  var users =  database.collection("users");
  var User=await users.findOne({"email":senitizedEmail})
  if(User)
  {
   var correctpassword=await bcrypt.compare(password,User.hashed_password);
   if(correctpassword)
   {
     return  res.status(400).json(User);
   }
   else{
     return  res.status(409).json("password incorrect");
   }
  }
  return res.status(409).json("user account not found");
 }
 catch(err)
 {
   console.log(err);
 }
});


app.post("/hello",async(req,res)=>{
   console.log(req.body);
   res.json("hello");
})

//Signup



app.listen(port);