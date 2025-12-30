import { type FC } from "react";
import { gridSize } from "./forecast.style";
import type { TLocation } from "../../types";
import { Grid, Container } from "@mui/material";
import { useAppSelector } from "../../redux/redux.hooks";
import { WeatherCard } from "../WeatherCard/WeatherCard";

export const Forecast: FC = () => {
  const locations: TLocation[] = useAppSelector(
    (state) => state.locations.locations
  );

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={10}
        padding={20}
        alignItems="center"
        justifyContent="center"
      >
        {locations.map((location) => (
          <Grid size={gridSize} key={location}>
            <WeatherCard location={location} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
