import { theme } from "./style";
import { createStyles } from "./styles/createStyle";

export const useStyles = () =>
  createStyles({
    box: {
      width: "100%",
      height: "100%",
      display: "flex",
      overflow: "auto",
      position: "fixed",
      justifyContent: "center",
      bgcolor: theme.palette.primary.main,
    },
  });
