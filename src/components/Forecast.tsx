import { useEffect, type FC } from "react";
import { Grid } from "@mui/material";
import { WeatherCard } from "./WeatherCard";
import { useAppSelector } from "../redux/redux.hooks";
import { addLocation, clearLocations } from "../redux/slices/location.slice";
import { useDispatch } from "react-redux";
import type { TLocation } from "../types";

export const Forecast: FC = () => {
  // const locations: TLocation[] = useAppSelector(
  //   (state) => state.locations.locations
  // );

  // const dispatch = useDispatch();

  // dispatch(clearLocations());

  // dispatch(addLocation("New York"));
  // dispatch(addLocation("London"));
  // dispatch(addLocation("Eilat"));
  // dispatch(addLocation("Alaska"));

  const locations: TLocation[] = useAppSelector(
    (state) => state.locations.locations
  );

  console.log("locations in Forecast:", locations);

  return (
    <Grid
      mb={6}
      container
      spacing={15}
      columns={2}
      justifyContent="center"
      alignItems="center"
    >
      {locations.map((location) => (
        <Grid size={1}
        /*onClick={() => {
          console.log("Clicked location:", location);
        }}*/ key={location}>
          <WeatherCard location={location} />
        </Grid>
      ))}
    </Grid>
  );
};
