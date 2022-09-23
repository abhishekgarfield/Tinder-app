var bcrypt = require("bcrypt");
var Express = require("express");
var app = Express();
require("dotenv").config();
app.use(Express.json());
const uri = process.env.URI;
var MongoClient = require("mongodb").MongoClient;
const port = "8000";

// Login Route
app.post("/login", async (req, res) => {
  console.log("LOGIN REQUEST");
  const client = new MongoClient(uri);
  const { email, password } = req.body;
  const senitizedEmail = email.toLowerCase();
  await client.connect();
  try {
    var database = client.db("app-data");
    var users = database.collection("users");
    var User = await users.findOne({ email: senitizedEmail });
    if (User) {
      var correctpassword = await bcrypt.compare(
        password,
        User.hashed_password
      );
      if (correctpassword) {
        return res.status(400).json(User);
      } else {
        return res.status(409).json("password incorrect");
      }
    }
    return res.status(409).json("user account not found");
  } catch (err) {
    console.log(err);
  }
});

app.put("/hello", async (req, res) => {
  console.log(req.body);
  res.json("hello");
});

// Get users for swipe
app.get("/getusers", async (req, res) => {
  const { gender } = req.query;
  console.log("getusers");
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");
    const genderedUsers = await users
      .find({ gender_identity: gender })
      .toArray();
    console.log(genderedUsers);
    res.send(genderedUsers);
  } catch (err) {
    console.log(err);
  }
});

// Add match

app.put("/addmatch",async(req,res)=>{
  console.log("add match");
  const {matcheduser_id,user_id}=req.body;
  console.log(req.body);
const client=new MongoClient(uri);
  try{
   await client.connect();
   const database=client.db("app-data");
   const users=database.collection("users");
   const setQuery={$push:{"mathches":{"user_id":matcheduser_id}}}
   const adduser=await users.updateOne({"user_id":user_id},setQuery) 
   res.json("user added");
  }
  catch(err)
  {
    console.log(err);
  }
})

// Signup

app.listen(port);
