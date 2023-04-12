import { RequestHandler } from "express";
import { Todo } from '../models/todo.model'

const TODOs: Todo[] = [];

export const createToDo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODOs.push(newTodo);
    res.status(201).json({ message: "created a todo", newToDo: newTodo });
}

export const getToDos: RequestHandler = (req, res, next) => {
    res.json({ todso: TODOs })
}

export const updateToDo: RequestHandler<{ id: string }> = (req, res, next) => {
    const { id } = (req as { params: { id: string } }).params;
    const idx = TODOs.findIndex((todo: Todo) => todo.id === id);

    if (idx === -1) {
        throw new Error("id not found")
    }

    const updatedInfo = (req.body as { text: string }).text;

    TODOs[idx] = { ...TODOs[idx], description: updatedInfo }


    res.json({ updated: TODOs[idx] })
}

export const deleteToDo: RequestHandler<{ id: string }> = (req, res, next) => {
    const { id } = (req as { params: { id: string } }).params;
    const idx = TODOs.findIndex((todo: Todo) => todo.id === id);

    if (idx === -1) {
        throw new Error("id not found")
    }

    TODOs.splice(idx, 1);
    res.json({ deleted: TODOs[idx] });



}