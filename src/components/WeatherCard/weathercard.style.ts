import { ICON_COLORS } from "./weathercard.constant";

export const hotIconStyle = { color: ICON_COLORS.HOT, fontSize: "2.5rem" };
export const coldIconStyle = { color: ICON_COLORS.COLD, fontSize: "2.5rem" };
export const pleasentIconStyle = {
  fontSize: "2.5rem",
  color: ICON_COLORS.PLEASANT,
};

export const descriptionColor = "#8F8F8F";

export const removeIconStyle = {
  color: "red",
  fontSize: "2rem",
  cursor: "pointer",
};

export const cardBoxStyle = {
  boxShadow: 4,
  justifyItems: "flex",
  minWidth: "fit-content",
};

export const removeIconBoxStyle = {
  mb: 2,
  display: "flex",
  justifyContent: "flex-end",
};

export const headCardBoxStyle = {
  display: "flex",
  fontWeight: "bold",
  alignItems: "center",
  justifyContent: "space-between",
};

export const statsDescBoxStyle = {
  padding: 1,
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-around",
};

export const statsBoxStyle = {
  mb: 2,
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-around",
};
