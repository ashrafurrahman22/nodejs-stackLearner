const express = require("express");
const morgan = require("morgan");
const PORT = process.env.port || 5000;
const userRouter = require("./userRoute");
const postRouter = require("./postRouter");

const app = express();

// middleware
// app.use(morgan('dev'));

app.use("/user", userRouter);
app.use("/posts", postRouter )

app.get("/products/:productId", (req, res) => {
  res.send("<h1>This is dynamic route</h2>");
});


app.get("/", (req, res) => {
  res.send("<h1>This is Home</h2>");
});

app.get("*", (req, res) => {
  res.send("<h1>404! Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
