import { theme } from "../../style";
import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    appBar: { boxShadow: 0 },
    toolbar: {
      justifyContent: "flex-end",
      bgcolor: theme.palette.secondary.main,
    },
  });
