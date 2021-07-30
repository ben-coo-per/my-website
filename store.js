import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./features/projects/projectsSlice";

export default configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
