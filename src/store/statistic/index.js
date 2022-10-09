import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllStatistic = createAsyncThunk("getAllStatistic", async () => {
  const fecthAllStatistic = await fetch(
    `https://dry-thicket-53013.herokuapp.com/hackaton/activity/today/1`
  );
  return fecthAllStatistic.json();
});
const StatisticSlice = createSlice({
  name: "StatisticSlice",
  initialState: {
    data: null,
    loading: false,
    error: "",
  },
  extraReducers: {
    [getAllStatistic.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = true;
    },
    [getAllStatistic.pending]: (state, action) => {
      state.loading = false;
    },
    [getAllStatistic.rejected]: (state, action) => {
      state.loading = true;
      state.error = "Error data fetching statistic";
    },
  },
});
export const statisticReducer = StatisticSlice.reducer;
