import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasks/slice";
import { filtersReducer } from "./filters/slice";

// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: "all",
//   },
// };

// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// Комбінація редюсерів
// const rootReducer = (state = {}, action) => {
//   return {
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

// Коротший варіант за допомогою функції combineReducers() з бібліотеки Redux
const rootReducerVanilla = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const enhancer = devToolsEnhancer();

const storeVanilla = createStore(rootReducerVanilla, enhancer);

///////// Redux Toolkit: //////////
// toolkit configureStore автоматично додає Redux DevTools + деякі додаткові перевірки
// const store = configureStore({ reducer: rootReducer });
// toolkit configureStore дозволяє автоматично створити кореневий редюсер (виконати combineReducers).
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

export default store;
