import type { TLocation } from "../../types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  locations: ["new york", "london", "eilat", "alaska"],
};

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation(state, action: PayloadAction<TLocation>) {
      // Prevent adding duplicate locations
      if (!state.locations.includes(action.payload)) {
        state.locations.push(action.payload);
      }
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
