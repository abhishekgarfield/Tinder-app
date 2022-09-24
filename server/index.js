var bcrypt = require("bcrypt");
var Express = require("express");
const { useSafeAreaFrame } = require("react-native-safe-area-context");
const {v4}=require("uuid");
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
// Test function
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
app.put("/addmatch", async (req, res) => {
  console.log("add match");
  const { matcheduser_id, user_id } = req.body;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const users = database.collection("users");
    const setQuery = { $push: { matches: { user_id: matcheduser_id } } };
    const adduser = await users.updateOne({ user_id: user_id }, setQuery);
    var User = await users.findOne({ user_id: user_id });
    res.send(User);
  } catch (err) {
    console.log(err);
  }
});

// Get matcedusers
app.get("/matchedusers", async (req, res) => {
  console.log("matched users");
  const { users } = req.query;
  const userdata = users.split(",");
  console.log(userdata);
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const userses = database.collection("users");
    if (users) {
      const pipeline = [
        {
          $match: {
            user_id: {
              $in: userdata,
            },
          },
        },
      ];
      const foundUsers = await userses.aggregate(pipeline).toArray();
      console.log(foundUsers);
      res.send(foundUsers);
    } else {
      res.send([]);
    }
  } catch (err) {
    console.log(err);
  }
});

//update user

app.put("/updateuser", async (req, res) => {
  console.log("update REQUEST");
  const client = new MongoClient(uri);
  const { user_id } = req.body;
  await client.connect();
  try {
    var database = client.db("app-data");
    var users = database.collection("users");
    var User = await users.findOne({ user_id: user_id });
    res.send(User);
  } catch (err) {
    console.log(err);
  }
});

// messages

app.get("/messages", async (req, res) => {
  console.log("in messages");
  const { currentuserid, selecteduserid } = req.query;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const messages = database.collection("messages");
    const messageData = await messages
      .find({
        $and: [{ to_userId: selecteduserid, from_userId: currentuserid }],
      })
      .sort({ timestamp: 1 })
      .toArray();
    res.send(messageData);
  } catch (err) {
    console.log(err);
  }
});

//add message
app.put("/addmessage", async (req, res) => {
  console.log("add message");
  const message = req.body;
  console.log(message);
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db("app-data");
    const messages = database.collection("messages");
    const updatemessage = messages.insertOne(message);
    res.json("data added");
  } catch (err) {
    console.log(err);
  }
});
// Signup
app.post("/signup",async(req,res)=>{
  console.log("signup REQUEST");
  const client = new MongoClient(uri);
  const user=req.body;
  delete user.confirmPassword;
  const hashed_password= await bcrypt.hash(user.password,10);
  user.hashed_password=hashed_password;
  delete user.password;
  const id=v4();
  user.user_id=id;
  user.email=user.email.toLowerCase();
  console.log(user);
  await client.connect();
  try {
    var database = client.db("app-data");
    var users = database.collection("users");
    var User = await users.insertOne(user);
    const getuser=await users.findOne({"user_id":id});
    res.send(getuser);
  }catch(err)
  {
    console.log(err);
  }
})

app.listen(port);
