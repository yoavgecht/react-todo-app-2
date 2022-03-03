const db = require("./db");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 6565;


app.use(cors());
app.use(express.json());

app.get("/todos", (req, res) => {
  console.log("PORT", port);
  const todos = db.list();
  res.status(200).send(todos);
});

app.post("/todos", (req, res) => {
  const { text, priority, dueDate } = req.body;
  const newTodo = db.insert(text, priority, dueDate);
  res.status(200).send(newTodo);
});

app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  db.remove(todoId);
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Todos app listening at http://localhost:${port}`);
});
