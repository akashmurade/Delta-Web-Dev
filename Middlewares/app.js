const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");
console.log(ExpressError);

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
// app.use("/random", (req, res) => {
//   res.status(404).send("Not Found");
// });

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
    throw new ExpressError();
  }
};

// Async Error Handling
// for async function it doesn't automatically call the next function so it should be done manually
// try-catch can be used to give protection against any type of errors
// app.get("/admin", async (req, res, next) => {
//   try {
//     let prom = new Promise((res, rej) => {
//       res(403);
//     });
//     let num = await prom.then((res) => {
//       return res;
//     });
//     return next(new ExpressError(num, "Access to Admin is Forbidden "));
//   } catch (err) {
//     next(err);
//   }
// });

// Async Wrap
function AsyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

app.get(
  "/admin",
  AsyncWrap(async (req, res, next) => {
    let prom = new Promise((res, rej) => {
      res(403);
    });
    let num = await prom.then((res) => {
      return res;
    });
    return next(new ExpressError(num, "Access to Admin is Forbidden "));
  })
);

app.get("/api", checkToken, (req, res) => {
  res.send("Sending Data");
});

// // error generator
app.get("/err", (req, res) => {
  abcd = aaa;
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Some Error Occurred" } = err;
  res.status(status).send(message);
});

// // middleware for error handling it logs the error and sends response as Error
// app.use("/", (err, req, res, next) => {
//   console.log(err);
//   next(err); // when next is called without any parameter it calls next non error handling middleware unless we pass the error in next as next(err)
// });

// // this will get executed if there is no argument to next for err object
// app.use("/", (req, res) => {
//   res.send("Root");
// });

// // this will get executed if err object is passed
// app.use((err, req, res, next) => {
//   console.log("Error Handling Middleware");
//   res.send("Error");
// });

app.listen(8080, () => {
  console.log("listening on port 8080");
});
