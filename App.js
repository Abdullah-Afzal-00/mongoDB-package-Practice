const dbConnect = require("./mongodb");

const getData = async () => {
  const resp = await dbConnect();
  const data = await resp.find({}).toArray();
  console.log(data);
};

getData();
//console.log("Running!");
