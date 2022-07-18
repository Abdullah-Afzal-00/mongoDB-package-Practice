const dbConnect = require("./mongodb");

const update = async () => {
  const data = await dbConnect();
  const result = data.updateOne(
    { name: "ab" },
    { $set: { name: "updatedName" } }
  );
};

update();
