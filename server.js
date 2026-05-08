const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

const PORT = 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_URL =
  "mongodb://admin:qwerty@mongo:27017/?authSource=admin";

const client = new MongoClient(MONGO_URL);

let db;

// Connect ONCE when server starts
async function connectDB() {
  try {
    await client.connect();

    console.log("Connected successfully to MongoDB");

    db = client.db("apnacollege-db");
  } catch (err) {
    console.log(err);
  }
}

connectDB();

// GET all users
app.get("/getUsers", async (req, res) => {
  try {
    const data = await db.collection("users").find({}).toArray();

    res.send(data);
  } catch (err) {
    console.log(err);

    res.status(500).send("Error fetching users");
  }
});

// POST new user
app.post("/addUser", async (req, res) => {
  try {
    const userObj = req.body;

    console.log(userObj);

    const result = await db.collection("users").insertOne(userObj);

    console.log(result);

    res.redirect('/?success=true');
  } catch (err) {
    console.log(err);

    res.status(500).send("Error adding user");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});