"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDo = exports.updateToDo = exports.getToDos = exports.createToDo = void 0;
const todo_model_1 = require("../models/todo.model");
const TODOs = [];
const createToDo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_model_1.Todo(Math.random().toString(), text);
    TODOs.push(newTodo);
    res.status(201).json({ message: "created a todo", newToDo: newTodo });
};
exports.createToDo = createToDo;
const getToDos = (req, res, next) => {
    res.json({ todso: TODOs });
};
exports.getToDos = getToDos;
const updateToDo = (req, res, next) => {
    const { id } = req.params;
    const idx = TODOs.findIndex((todo) => todo.id === id);
    if (idx === -1) {
        throw new Error("id not found");
    }
    const updatedInfo = req.body.text;
    TODOs[idx] = { ...TODOs[idx], description: updatedInfo };
    res.json({ updated: TODOs[idx] });
};
exports.updateToDo = updateToDo;
const deleteToDo = (req, res, next) => {
    const { id } = req.params;
    const idx = TODOs.findIndex((todo) => todo.id === id);
    if (idx === -1) {
        throw new Error("id not found");
    }
    TODOs.splice(idx, 1);
    res.json({ deleted: TODOs[idx] });
};
exports.deleteToDo = deleteToDo;
