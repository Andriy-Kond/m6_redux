import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, toggleCompleted } from "./actions";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

export const tasksReducerVanilla = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "task/addTask":
      return [...state, action.payload];

    case "task/deleteTask":
      return state.filter(task => task.id !== action.payload);

    case "task/toggleCompleted":
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }

        return {
          ...task,
          completed: !task.completed,
        };
      });

    default:
      return state;
  }
};

///////// Redux Toolkit: //////////
// & Без Immer:
export const tasksReducer = createReducer(tasksInitialState, {
  // Синтаксис обчислюваних властивостей об'єкта (наприклад, [addTask]) призводить значення до рядка, тому можна просто використовувати ім'я функції без вказівки властивості type, адже метод toString() генератора екшену було перевизначено так, щоб повертати тип екшену.
  [addTask]: (state, action) => [...state, action.payload],

  [deleteTask]: (state, action) =>
    state.filter(task => task.id !== action.payload),

  [toggleCompleted]: (state, action) => {
    state.map(task => {
      if (task.id !== action.payload) {
        return task;
      }

      return {
        ...task,
        completed: !task.completed,
      };
    });
  },
});

// Редюсери повинні бути чистими функціями, що не змінюють поточний стан, а повертають новий. Але іноді це сильно ускладнює код, оскільки код іммутального оновлення стану може бути досить заплутаним.
// Redux Toolkit «під капотом» використовує бібліотеку Immer, яка дозволяє писати код оновлення стану в редюсері так, ніби змінюючи стан:
// & With using Immer:
export const tasksReducerWithUsingImmer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => state.push(action.payload),

  [deleteTask]: (state, action) => {
    // state.filter(task => task.id !== action.payload)
    const idx = state.findIndex(item => item.id === action.payload);
    state.splice(idx, 1);
  },

  [toggleCompleted]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

// ~ Зміна або оновлення
// Іноді код іммутабельного оновлення стану лаконічніший, ніж його альтернатива, що «змінює». Наприклад, у редюсері обробки екшену видалення завдання. У такому разі необхідно обов'язково повернути новий стан.

// export const tasksReducer = createReducer(tasksInitialState, {
//   [deleteTask]: (state, action) => {
//     // ❌ Не правильно
//     // state.filter(task => task.id !== action.payload)

//     // ✅ Правильно
//     return state.filter(task => task.id !== action.payload);
//   },
// });

// ~ Зміна чи повернення
// У бібліотеці Immer в коді одного редюсера можна лише або мутувати стан, або повернути оновлений, але не те й інше водночас.

// const reducer = createReducer([], {
//   [doSomething]: (state, action) => {
//     // ❌ Так робити не можна, буде згенеровано виняток
//     state.push(action.payload);
//     return state.map(value => value * 2);
//   },
// });
