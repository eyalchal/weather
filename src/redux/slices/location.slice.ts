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
      console.log(`Adding weather for ${action.payload}`);

      if (action.payload === "") return;

      // Prevent adding duplicate locations - case insensitive
      const isExist: boolean = state.locations.some(
        (loc: string) =>
          loc.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
      );

      if (!isExist) {
        state.locations.push(action.payload);
      } else {
        console.log(`Location '${action.payload}' already exists`);
      }
    },
    removeLocation(state, action: PayloadAction<TLocation>) {
      state.locations = state.locations.filter(
        (location) => location !== action.payload
      );
      console.log(`${action.payload} removed`);
    },
    clearLocations(state) {
      console.log(`Locations removed`);
      state.locations = [];
    },
  },
});

export const { addLocation, removeLocation, clearLocations } =
  locationSlice.actions;

export default locationSlice.reducer;
