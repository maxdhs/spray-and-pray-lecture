import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ success: true, message: "Welcome to the Emoji Server" });
});

app.get("/users", (req, res) => {
  res.send({ success: true, users });
});

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.send({
      success: false,
      error: "Name must be provided to create a user!",
    });
  }

  const user = { id: users.length + 1, name, count: 0 };

  users.push(user);
  res.send({ success: true, user });
});

app.use((req, res) => {
  res.send({ success: false, error: "No route found." });
});

app.use((error, req, res, next) => {
  res.send({ success: false, error: error.message });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

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
