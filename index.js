const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv").config();
app.use(cors());
app.use(express.json());
const port = process.env.port || 1000;
let { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.DATABASE);
let re, db, col;
async function ged() {
  re = await client.connect();
  db = re.db("jk");
  col = db.collection("as");

  console.log("connect");
}
ged();
app.get("/read", async (req, resp) => {
  let resuu = await col.find().toArray();
  resp.send(resuu);
});

app.listen(port, () => {
  console.log("server start");
});
