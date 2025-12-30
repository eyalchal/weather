import type { FC } from "react";
import { appBarStyle, toolbarStyle } from "./header.style";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { black } from "../../style";

export const Header: FC = () => {
  return (
    <AppBar position="fixed" sx={appBarStyle}>
      <Toolbar sx={toolbarStyle}>
        <Typography variant="h4" color={black} my={2}>
          תחזית מסביב לעולם
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
