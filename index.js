import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ success: true, message: "Welcome to the Emoji Server" });
});

app.get("/users", async (req, res) => {
  // get the actual users from the db
  const users = await prisma.user.findMany();
  res.send({ success: true, users });
});

app.post("/users", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.send({
      success: false,
      error: "Name must be provided to create a user!",
    });
  }

  const user = await prisma.user.create({
    data: {
      name,
    },
  });

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
  console.log(`app listening on port ${port}`);
});
