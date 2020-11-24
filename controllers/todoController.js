const express = require('express');
const router = express.Router();
const Todos = require("../models/todo");

module.exports = {
  showTodos(req, res) {
    Todos.find({}, (err, foundTodo) => {
      res.json(foundTodo);
    });
  },
  removeTodo(req, res) {
    Todos.findByIdAndRemove(req.params.id, (err, deletedTodo) => {
      res.json(deletedTodo);
    });
  },
  updateTodo(req, res) {
    Todos.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, updatedTodo) => {
        res.json(updatedTodo);
      }
    );
  },
  createTodo(req, res) {
    Todos.create(req.body, (err, createdTodo) => {
      res.json(createdTodo);
    });
  },
};
