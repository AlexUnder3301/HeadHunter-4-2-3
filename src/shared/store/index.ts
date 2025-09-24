import { configureStore, combineReducers } from "@reduxjs/toolkit";
import vacancies from "./vacanciesSlice";

const rootReducer = combineReducers({
  vacancies,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
