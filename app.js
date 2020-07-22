const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const codeRoutes = require("./routes/code-routes");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/code", codeRoutes);

app.listen(PORT);
