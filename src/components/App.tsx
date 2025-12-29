import type { FC } from "react";
import { theme } from "../style";
import { Header } from "./Header";
import { Box } from "@mui/material";
import { Forecast } from "./Forecast";

export const App: FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          //overflow: "auto",
          bgcolor: theme.palette.primary.main,
          position: "fixed",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Forecast />
      </Box>
    </>
  );
};
