const express = require("express");

const app = express();

app.set("port", 3000);
 
const indexRouter = require("./routes");
const testRouter = require("./routes/test");
 
app.use("/", indexRouter);
 
app.use("/test", testRouter);

app.listen(app.get("port"), () => {
  console.log(`Server On Port ${app.get("port")}`);
});