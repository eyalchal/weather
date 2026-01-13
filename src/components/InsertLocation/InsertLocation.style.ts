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
      // "& .MuiInputLabel-root": {
      //   width: "100%",
      //   textAlign: "center",
      //   "&.Mui-focused": {
      //     opacity: 0,
      //   },
      // },
      "& input": {
        textAlign: "center",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        borderWidth: 3,
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderWidth: 4,
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
