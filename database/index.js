const mongoose = require("mongoose");
const env = require(`../environment/${ process.env.NODE_ENV }`);

exports.clientPromise = mongoose
  .connect(
  env.dbUrl
  )
  .then((m) => {
    console.log("connexion db ok !");
    return m;
  })
  .catch((err) => console.log(err));