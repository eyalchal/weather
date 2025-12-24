import type { FC } from "react";
import { Grid } from "@mui/material";
import { WeatherCard } from "./WeatherCard";

export const Forecast: FC = () => {
  const cities: string[] = ["new york", "london", "eilat", "alaska"];

  return (
    <Grid
      mb={6}
      container
      spacing={15}
      columns={2}
      padding={15}
      justifyContent="center"
    >
      {cities.map((city) => (
        <Grid size={{ xs: 6, sm: 0.7, md: 0.7, lg: 0.7 }}>
          <WeatherCard city={city} />
        </Grid>
      ))}
    </Grid>
  );
};
