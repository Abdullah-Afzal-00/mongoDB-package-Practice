const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");

const app = express();

app.use(express.json());

app.get("/", async (req, res, next) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  res.send(data);
  next();
});

app.post("/", async (req, res, next) => {
  console.log(req.body.name);

  let data = await dbConnect();
  data = await data.insert(req.body);
  console.log(data);
  res.send("posted");
});

app.put("/", async (req, res, next) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: { class: req.body.class } }
  );
  res.status(200).send("result");
});

app.delete("/:id", async (req, res, next) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });

  res.status(200).send(result);
});

app.listen(3000, () => console.log("App is listening on 3000 port"));
