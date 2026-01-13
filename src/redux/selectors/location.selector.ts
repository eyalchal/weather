import type { RootState } from "../store";

export const locationsSelector = (state: RootState) =>
  state.locations.locations;
