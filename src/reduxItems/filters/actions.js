import { createAction } from "@reduxjs/toolkit";

// Vanilla Redux
export const setStatusFilterVanilla = filter => ({
  type: "filter/setFilter",
  payload: filter,
});

///////// Redux Toolkit: //////////
export const setStatusFilter = createAction("filter/setFilter");
