const express = require("express");
const app = express();
const PORT = 5000;
const bcrypt = require("bcrypt");

app.use(express.json());

async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
}

const users = [];

app.get("/user", (req, res) => {
  res.send(users);
});

app.post("/user", async (req, res) => {

  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    return res.status(400).json({
      error: "All fields are required: userName, email, password",
    });
  }

  console.log(`Received: userName = ${userName}, email = ${email}`);

  const hashedPassword = await hashPassword(password);

  const user = {
    userName,
    email,
    hashedPassword,
  };
  users.push(user);

  console.log(`Original password: ${password}`);
  console.log(`Hashed password: ${hashedPassword}`);

  res.json({
    message: "User created successfully",
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
