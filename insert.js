const dbConnect = require("./mongodb");

const insertFunction = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    { name: "babar", class: "gama" },
    { name: "khawaja", class: "gama" },
  ]);
  console.log("insert Function !!");

  if (result.acknowledged) console.log("Inserted");
  else console.log("fail");
};

insertFunction();
