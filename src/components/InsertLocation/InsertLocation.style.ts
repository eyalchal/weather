import { BLACK, theme } from "../../style";
import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    box: {
      gap: 2,
      bottom: 20,
      display: "flex",
      position: "fixed",
      alignItems: "center",
    },
    button: {
      color: BLACK,
      fontSize: "1.5rem",
      backgroundColor: theme.palette.secondary.main,
    },
    textField: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: 4,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderWidth: 5,
      },
    },
    inputProps: {
      sx: {
        borderRadius: 2,
      },
      style: {
        fontSize: "1.5rem",
      },
    },
  });
