import type { FC } from "react";
import { BLACK } from "../../style";
import { useStyles } from "./header.style";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { HEADER_TEXT } from "../../constants/header.constant";

export const Header: FC = () => {
  const styles = useStyles();

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Typography variant="h4" color={BLACK} my={3}>
          {HEADER_TEXT}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
