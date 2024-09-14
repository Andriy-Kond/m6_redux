import { combineReducers } from "redux";
import { statusFilters } from "../filters/constants";

const taskInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const filterInitialState = {
  status: statusFilters.all,
};

export const tasksReducer = (state = taskInitialState, action) => {
  switch (action.type) {
    case "task/addTask":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "task/deleteTask":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id === action.payload),
      };

    case "task/toggleCompleted":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return {
            ...task,
            completed: !task.completed,
          };
        }),
      };

    default:
      return state;
  }
};

export const filtersReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case "filter/setFilter":
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    default:
      return state;
  }
};

// export const rootReducer = (state = {}, action) => ({
//   tasks: tasksReducer(state.tasks, action),
//   filters: filtersReducer(state.filters, action),
// });

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
