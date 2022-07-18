const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbConnect = async () => {
  let result = await client.connect();
  let db = result.db("Test_DB");
  let collection = db.collection("firstCollection");
  return collection;
};

module.exports = dbConnect;
