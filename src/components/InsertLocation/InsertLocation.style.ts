import { theme } from "../../style";

export const boxStyle = {
  position: "fixed",
  bottom: 20,
  display: "flex",
  gap: 2,
  alignItems: "center",
};

export const buttonStyle = {
  backgroundColor: theme.palette.secondary.main,
  color: "black",
  fontSize: "1.5rem",
};

export const inputProps = {
  sx: {
    borderRadius: 2,
  },
  style: {
    fontSize: "1.5rem",
  },
};
