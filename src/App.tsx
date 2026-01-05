import type { FC } from "react";
import { Box } from "@mui/material";
import { useStyles } from "./app.style";
import { Header } from "./components/Header/Header";
import { Forecast } from "./components/Forecast/Forecast";
import { InsertLocation } from "./components/InsertLocation/InsertLocation";

export const App: FC = () => {
  const styles = useStyles();

  return (
    <>
      <Header />
      <Box sx={styles.box}>
        <Forecast />
        <InsertLocation />
      </Box>
    </>
  );
};
