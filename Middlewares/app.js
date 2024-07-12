const express = require("express");
const app = express();

// Middlewares are functions that work when the server receives a request and before server sends response
// Therefore if we send a response furthur middlewares do not get executed
// Chaining is a middleware calling another middleware forming a chain
// Middlewares can make changes in the req and res objects
// They can end the req-res cycle
// They can call the next middleware function in the stack

// app.use(middleware)

// basic middleware
// app.use((req, res, next) => {
//   console.log(req.query);
//   next();
// });

// utility middleware
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toDateString();
//   next();
// });

// app.use((req, res, next) => {
//   console.log(req.time);
//   next();
// });

// logger
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
// });

// 404
app.use("/random", (req, res) => {
  res.status(404).send("Not Found");
});

// Middleware for an API that checks if the access token was passed into the query string or not
// app.use("/api", (req, res, next) => {
//   if (req.query.token == "give access") {
//     next();
//   } else {
//     res.send("Requst Denied");
//   }
// });

// app.get("/api", (req, res) => {
//   res.send("Sending Data");
// });

// Middleware as a function
const checkToken = (req, res, next) => {
  if (req.query.token == "give access") {
    next();
  } else {
    res.send("Request Denied");
  }
};

app.get("/api", checkToken, (req, res) => {
  res.send("Sending Data");
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
