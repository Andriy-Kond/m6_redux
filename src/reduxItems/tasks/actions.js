import { nanoid } from "nanoid";

export const addTask = text => ({
  type: "task/addTask",
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
});

export const deleteTask = id => ({
  type: "task/deleteTask",
  payload: id,
});

export const toggleCompleted = id => ({
  type: "task/toggleCompleted",
  payload: id,
});
