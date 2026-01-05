import type { FC } from "react";
import { black } from "../../style";
import { appBarStyle, toolbarStyle } from "./header.style";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { HEADER_TEXT } from "../../constants/header.constant";

export const Header: FC = () => {
  return (
    <AppBar position="fixed" sx={appBarStyle}>
      <Toolbar sx={toolbarStyle}>
        <Typography variant="h4" color={black} my={3}>
          {HEADER_TEXT}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
