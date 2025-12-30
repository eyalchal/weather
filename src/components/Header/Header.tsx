import type { FC } from "react";
import { black } from "../../style";
import { headerText } from "./header.constant";
import { appBarStyle, toolbarStyle } from "./header.style";
import { AppBar, Toolbar, Typography } from "@mui/material";

export const Header: FC = () => {
  return (
    <AppBar position="fixed" sx={appBarStyle}>
      <Toolbar sx={toolbarStyle}>
        <Typography variant="h4" color={black} my={2}>
          {headerText}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
