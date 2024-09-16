import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  // Властивість name визначає ім'я слайсу, яке додаватиметься під час створення екшенів, як приставка до імен редюсерів, оголошених у властивості reducers. Так ми отримаємо екшени з типами tasks/addTask, tasks/deleteTask та tasks/toggleCompleted.
  // Ім'я слайсу
  name: "filters",
  // Початковий стан редюсера слайсу
  initialState: filtersInitialState,
  // Об'єкт редюсерів
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
