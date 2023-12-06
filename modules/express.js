const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello Bambino</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
    {
      name: "Maria Joana",
      email: "mariajoana@gmail.com",
    },
  ];

  res.status(200).json(users);
});

const port = 8080;

app.listen(port, () =>
  console.log(`Server Rolling With Express on Port ${port}!`)
);
