import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addTaskVanilla = text => ({
  type: "task/addTask",
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
});

export const deleteTaskVanilla = id => ({
  type: "task/deleteTask",
  payload: id,
});

export const toggleCompletedVanilla = id => ({
  type: "task/toggleCompleted",
  payload: id,
});

///////// Redux Toolkit: //////////
// Створення генераторів екшенів: createAction() повертає генератор екшену

// За замовчуванням генератори екшенів приймають один аргумент, який стає значенням властивості payload.
// Якщо потрібно написати додаткову логіку створення значення payload, наприклад, додати унікальний ідентифікатор, createAction можна передати другий, необов'язковий аргумент – функцію створення екшену.

// createAction(type, prepareAction)

// Аргументи генератора екшену будуть передані функції prepareAction, яка повинна повернути об'єкт із властивістю payload. Властивість type буде додано автоматично.
export const addTask = createAction("task/addTask", text => ({
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
}));
export const deleteTask = createAction("task/deleteTask");
export const toggleCompleted = createAction("task/toggleCompleted");

// addTask - це генератор екшену. Він має властивість type, а також функцію toString(), які повертають тип екшену:
console.log(addTask.type); // "tasks/AddTask"
console.log(addTask.toString()); // "tasks/AddTask"
