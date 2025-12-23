import type { FC } from "react";
import { Grid } from "@mui/material";
import { WeatherCard } from "./WeatherCard";

export const Forecast: FC = () => {
  return (
    <Grid
      mb={6}
      container
      spacing={15}
      columns={2}
      padding={15}
      justifyContent="center"
    >
      <Grid size={{ xs: 1, md: 0.7 }}>
        <WeatherCard city="new york" />
      </Grid>
      <Grid size={{ xs: 1, sm: 0.7 }}>
        <WeatherCard city="london" />
      </Grid>
      <Grid size={{ xs: 1, sm: 0.7 }}>
        <WeatherCard city="eilat" />
      </Grid>
      <Grid size={{ xs: 1, sm: 0.7 }}>
        <WeatherCard city="alaska" />
      </Grid>
    </Grid>
  );
};
