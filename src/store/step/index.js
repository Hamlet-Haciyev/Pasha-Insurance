import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllSteps = createAsyncThunk("getAllSteps", async () => {
  const fetchAllSteps = await fetch(
    `https://dry-thicket-53013.herokuapp.com/hackaton/activity/today/1`
  );
  return fetchAllSteps.json();
});
const StepSlice = createSlice({
  name: "StepSlice",
  initialState: {
    data: null,
    error: "",
    loading: false,
  },
  extraReducers: {
    [getAllSteps.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = true;
    },
    [getAllSteps.pending]: (state, action) => {
      state.loading = false;
    },
    [getAllSteps.rejected]: (state, action) => {
      state.loading = true;
      state.error = "error steps data fetching";
    },
  },
});
export const stepReducer = StepSlice.reducer;
