// how do we build a server

// we are going to use express
// we need to initialize a node project

// when our user sends a GET /  we want to send {success: true, message: "Welcome to the Emoji Server"}

import express from "express";

const app = express();

// our first middleware to tell express to expect json and convert it for us to an object
app.use(express.json());

// route handler
// GET request /
// first argument is the path and the second argument is the cb function to fire (we get req and res arguments for free)
app.get("/", (req, res) => {
  res.send({ success: true, message: "Welcome to the Emoji Server" });
});

app.get("/users", (req, res) => {
  res.send({ success: true, users });
});

app.post("/users", (req, res) => {
  // what info do i need from the user?
  // i need name how do i get it
  const name = req.body.name;

  // how can we make sure theres a name and reject if not?
  if (!name) {
    return res.send({
      success: false,
      error: "Name must be provided to create a user!",
    });
  }

  // i need to create a new user and add it to our "db"
  const user = { id: users.length + 1, name, count: 0 };

  // add the new user to the db
  users.push(user);
  res.send({ success: true, user });
});

app.use((req, res) => {
  res.send({ success: false, error: "No route found." });
});

// express's built in error handling. need 4 paramaters to activate
app.use((error, req, res, next) => {
  res.send({ success: false, error: error.message });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// why are there ports?
// multiple running apps each want to communicate on the internet to the world

// fake db
let users = [
  {
    id: "0de64544-2f66-40bc-8649-aa5c618c5b38",
    name: "Max",
    count: 2,
  },
  {
    id: "79f31fc8-8ca9-4744-a9ac-a68a89d71be2",
    name: "Abdel",
    count: 11,
  },
  {
    id: "a5afe6f1-fca6-4752-856a-ca2fa9a54eb6",
    name: "Adam",
    count: 6,
  },
];
