import type { FC } from "react";
import { Grid } from "@mui/material";
import { WeatherCard } from "./WeatherCard";
import { useAppSelector } from "../redux/redux.hooks";

export const Forecast: FC = () => {
  const locations: string[] = useAppSelector(
    (state) => state.locations.locations
  );

  return (
    <Grid mb={6} container spacing={15} columns={2} justifyContent="center">
      {locations.map((location) => (
        <Grid size={{ xs: 6, sm: 0.7, md: 0.7, lg: 0.7 }}>
          <WeatherCard location={location} />
        </Grid>
      ))}
    </Grid>
  );
};
