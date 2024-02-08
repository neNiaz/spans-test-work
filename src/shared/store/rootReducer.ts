import { combineReducers } from "@reduxjs/toolkit";
import dogSlice from "./ducks/content/reducer.ts";
import authSlice from "./ducks/auth-control/reducer.ts";

export const rootReducer = combineReducers({
  dogSlice,
  auth: authSlice,
});
