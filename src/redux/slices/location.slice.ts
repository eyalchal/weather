import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TLocation } from "../../types";

const initialState = {
  locations: ["new york", "london", "eilat", "alaska"],
  // locations: [] as TLocation[],
};

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation(state, action: PayloadAction<TLocation>) {
      state.locations.push(action.payload);
    },
    removeLocation(state, action: PayloadAction<TLocation>) {
      state.locations = state.locations.filter(
        (location) => location !== action.payload
      );
    },
    clearLocations(state) {
      state.locations = [];
    },
  },
});

export const { addLocation, removeLocation, clearLocations } =
  locationSlice.actions;

export default locationSlice.reducer;
