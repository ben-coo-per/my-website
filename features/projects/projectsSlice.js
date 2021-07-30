import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    selectFilter: "proud of",
  },
  reducers: {
    setSelectedFilter: (state, action) => {
      state.selectFilter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedFilter } = projectsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFilter = (state) => ({
  filter: state.projects.selectFilter,
});

export default projectsSlice.reducer;
