const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const ContactRouter = require("./Routes/ContactRoute");

app.use("/contacts", ContactRouter);

app.listen(PORT, (req, res) => {
  console.log("Server started on port 4000");
});
