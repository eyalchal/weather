import { Box } from "@mui/material";
import type { FC } from "react";
import { boxStyle } from "./app.style";
import { Forecast } from "./components/Forecast/Forecast";
import { Header } from "./components/Header/Header";
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
