const dbConnect = require("./mongodb");

const deleteData = async () => {
  const data = dbConnect();
  const result = (await data).deleteOne({ name: "updatedName" });
};

deleteData();
