const loki = require("lokijs");
const _ = require("lodash");

const database = new loki("learn-vue");
const todos = database.addCollection("todos");
todos.insert({ text: "להוציא את הכלב", priority: "high", date: new Date() });
todos.insert({ text: "לנקות את הבית", priority: "medium", date: new Date() });
todos.insert({ text: "לעשות תרגיל ב-Vue", priority: "low", date: new Date() });

module.exports = {
  insert(text, priority, date) {
    return todos.insert({ text, priority, date });
  },
  list() {
    return _.chain(todos.find({}))
      .map((todo) => ({ ...todo, id: todo.$loki }))
      .map((todo) => _.pick(todo, ["id", "text", "priority", "date"]))
      .value();
  },
  remove(id) {
    return todos.remove({ $loki: id });
  },
};
