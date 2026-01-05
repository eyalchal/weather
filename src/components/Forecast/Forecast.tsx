import { type FC } from "react";
import { useStyles } from "./forecast.style";
import { Grid, Container } from "@mui/material";
import { useAppSelector } from "../../redux/redux.hooks";
import { WeatherCard } from "../WeatherCard/WeatherCard";

export const Forecast: FC = () => {
  const locations: string[] = useAppSelector(
    (state) => state.locations.locations
  );

  const styles = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={30} padding={20} justifyContent="space-around">
        {locations.map((location) => (
          <Grid size={styles.gridSize} key={location}>
            <WeatherCard location={location} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
