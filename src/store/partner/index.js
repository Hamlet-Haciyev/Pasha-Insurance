import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllPartner = createAsyncThunk("", async () => {
  const fetchAllPartner = await fetch(
    `https://dry-thicket-53013.herokuapp.com/hackaton/user-reward`
  );
  return fetchAllPartner.json();
});
const PartnerSlice = createSlice({
  name: "PartnerSlice",
  initialState: {
    data: null,
    error: "",
    loading: false,
  },
  extraReducers: {
    [getAllPartner.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = true;
    },
    [getAllPartner.pending]: (state, action) => {
      state.loading = false;
    },
    [getAllPartner.rejected]: (state, action) => {
      state.loading = true;
      state.error = "error partner fecthing data";
    },
  },
});
export const PartnerReducer = PartnerSlice.reducer;
