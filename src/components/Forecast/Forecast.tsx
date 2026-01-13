import { type FC } from "react";
import { Grid } from "@mui/material";
import { useStyles } from "./forecast.style";
import { useAppSelector } from "../../redux/redux.hooks";
import { WeatherCard } from "../WeatherCard/WeatherCard";

export const Forecast: FC = () => {
  const locations: string[] = useAppSelector(
    (state) => state.locations.locations
  );

  const styles = useStyles();

  return (
    <Grid
      p={15}
      container
      spacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 100 }}
    >
      {locations.map((location) => (
        <Grid size={styles.gridSize} key={location}>
          <WeatherCard location={location} />
        </Grid>
      ))}
    </Grid>
  );
};
