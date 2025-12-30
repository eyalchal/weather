import { Grid, Container } from "@mui/material";
import { type FC } from "react";
import { useAppSelector } from "../../redux/redux.hooks";
import type { TLocation } from "../../types";
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
        justifyContent="center"
        alignItems="center"
      >
        {locations.map((location) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={location}>
            <WeatherCard location={location} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
