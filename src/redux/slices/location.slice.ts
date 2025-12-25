import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  locations: ["new york", "london", "eilat", "alaska"],
};

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation(state, action: PayloadAction<string>) {
      state.locations.push(action.payload);
    },
    removeLocation(state, action: PayloadAction<string>) {
      state.locations = state.locations.filter(
        (location) => location !== action.payload
      );
    },
  },
});

export const { addLocation, removeLocation } = locationSlice.actions;

export default locationSlice.reducer;
