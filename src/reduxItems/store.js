import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { tasksReducer } from "./tasks/reducer";
import { filtersReducer } from "./filters/reducer";

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
const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);

export default store;
