const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/salary-routes");
const routerf = require("./routes/food-routes");
const routerr = require("./routes/customer-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/salarys", router);
app.use("/foods", routerf);
app.use("/customers", routerr); // localhost:5000/customers
// localhost:5000/salarys

mongoose
  .connect(
    "mongodb+srv://ITP:1234@cluster0.lipyl.mongodb.net/BasicSalary?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
