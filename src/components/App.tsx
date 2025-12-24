import type { FC } from "react";
import { theme } from "../style";
import { Header } from "./Header";
import { Box } from "@mui/material";
import { Forecast } from "./Forecast";

export const App: FC = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <Forecast />
      </Box>
    </>
  );
};
