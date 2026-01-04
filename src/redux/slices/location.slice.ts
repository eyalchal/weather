import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  locations: ["new york", "london", "eilat", "alaska"],
};

const locationSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    addLocation(state, action: PayloadAction<string>) {
      console.log(`Adding weather for ${action.payload}`);

      if (action.payload === "") return;

      // Prevent adding duplicate locations - case insensitive
      const isExist: boolean = state.locations.some(
        (loc: string) =>
          loc.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
      );

      if (!isExist) {
        state.locations.push(action.payload);
        return;
      }

      console.log(`Location '${action.payload}' already exists`);
    },
    removeLocation(state, action: PayloadAction<string>) {
      state.locations = state.locations.filter(
        (location) => location !== action.payload
      );
      console.log(`${action.payload} removed`);
    },
  },
});

export const { addLocation, removeLocation } = locationSlice.actions;

export default locationSlice.reducer;
