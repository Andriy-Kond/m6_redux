import { statusFilters } from "./constants";

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filter/setFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

// export const rootReducer = (state = {}, action) => ({
//   tasks: tasksReducer(state.tasks, action),
//   filters: filtersReducer(state.filters, action),
// });

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

// import { statusFilters } from "./constants";

// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "task/addTask":
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };

//     case "task/deleteTask":
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };

//     case "task/toggleCompleted":
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };

//     case "filter/setFilter":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
