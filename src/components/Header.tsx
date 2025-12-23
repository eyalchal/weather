import type { FC } from "react";
import { Toolbar, Typography } from "@mui/material";

export const Header: FC = () => {
  return (
    <Toolbar sx={{ justifyContent: "flex-end" }}>
      <Typography variant="h4" color="black" my={2} >
        תחזית מסביב לעולם
      </Typography>
    </Toolbar>
  );
};
