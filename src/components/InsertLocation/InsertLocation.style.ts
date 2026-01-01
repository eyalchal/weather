import { theme } from "../../style";

export const boxStyle = {
  gap: 2,
  bottom: 20,
  display: "flex",
  position: "fixed",
  alignItems: "center",
};

export const buttonStyle = {
  color: "black",
  fontSize: "1.5rem",
  backgroundColor: theme.palette.secondary.main,
};

export const textFieldStyle = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderWidth: 4,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderWidth: 5,
  },
};

export const inputProps = {
  sx: {
    borderRadius: 2,
  },
  style: {
    fontSize: "1.5rem",
  },
};
