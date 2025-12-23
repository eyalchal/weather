import { Box } from "@mui/material";
import type { FC } from "react";
import { Header } from "./Header";
import { theme } from "../style";
import { Forecast } from "./Forecast";

export const App: FC = () => {
  return (
    <>
      <Header />
      <Box bgcolor={theme.palette.primary.main} minHeight="100vh">
        <Forecast />
      </Box>
    </>
  );
};
