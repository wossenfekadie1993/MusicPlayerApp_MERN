const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/backend";

mongoose
  .connect(DB_URL, (err) => {
    useNewUrlParser: true;
    useUnifiedTopology: true;
  })
  .then(() => console.log("database is successfully connected "))
  .catch(err => console.log(err));
