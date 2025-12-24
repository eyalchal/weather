import type { FC } from "react";
import { theme } from "../style";
import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header: FC = () => {
  return (
    <AppBar position="absolute" sx={{ boxShadow: 0 }}>
      <Toolbar
        sx={{
          justifyContent: "flex-end",
          bgcolor: theme.palette.secondary.main,
        }}
      >
        <Typography variant="h4" color="black" my={2}>
          תחזית מסביב לעולם
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
