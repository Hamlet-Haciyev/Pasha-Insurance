import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllHistory = createAsyncThunk("getAllHistory", async () => {
  const fecthAllHistory = await fetch(
    `https://dry-thicket-53013.herokuapp.com/hackaton/activity/history/1/2022-09-01/2022-10-01`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return fecthAllHistory.json();
});

const HistorySlice = createSlice({
  name: "HistorySlice",
  initialState: {
    data: null,
    loading: false,
    error: "",
  },
  extraReducers: {
    [getAllHistory.fulfilled]: (state, action) => {
      state.loading = true;
      state.data = action.payload;
    },
    [getAllHistory.pending]: (state, action) => {
      state.loading = false;
    },
    [getAllHistory.rejected]: (state, action) => {
      state.loading = true;
      state.error = "error";
    },
    // builder.addCase(getAllHistory.fulfilled, (state, action) => {
    //   console.log("full");
    //   state.loading = true;
    //   state.data = action.payload;
    // });
    // builder.addCase(getAllHistory.pending, (state, action) => {
    //   state.loading = false;
    // });
    // builder.addCase(getAllHistory.rejected, (state, action) => {
    //   state.error = "error data fetching getAllHistory";
    //   state.loading = true;
    //   console.log("rej");
    // });
  },
});
export const historyReducer = HistorySlice.reducer;
