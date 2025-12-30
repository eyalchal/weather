import type { FC } from "react";
import { Box } from "@mui/material";
import { boxStyle } from "./app.style";
import { Header } from "./components/Header/Header";
import { Forecast } from "./components/Forecast/Forecast";
import { InsertLocation } from "./components/InsertLocation/InsertLocation";

export const App: FC = () => {
  return (
    <>
      <Header />
      <Box sx={boxStyle}>
        <Forecast />
        <InsertLocation />
      </Box>
    </>
  );
};
