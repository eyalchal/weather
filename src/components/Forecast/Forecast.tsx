import { type FC } from "react";
import { gridSize } from "./forecast.style";
import { Grid, Container } from "@mui/material";
import { useAppSelector } from "../../redux/redux.hooks";
import { WeatherCard } from "../WeatherCard/WeatherCard";

export const Forecast: FC = () => {
  const locations: string[] = useAppSelector(
    (state) => state.locations.locations
  );

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={20}
        padding={20}
        columnSpacing={30}
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
