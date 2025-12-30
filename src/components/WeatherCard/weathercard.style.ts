import { ICON_COLORS } from "./weathercard.constant";

export const hotIconStyle = { color: ICON_COLORS.HOT, fontSize: "2.5rem" };
export const coldIconStyle = { color: ICON_COLORS.COLD, fontSize: "2.5rem" };
export const pleasentIconStyle = {
  color: ICON_COLORS.PLEASANT,
  fontSize: "2.5rem",
};

export const descriptionColor = "#8F8F8F";

export const removeIconStyle = {
  color: "red",
  cursor: "pointer",
  fontSize: "2rem",
};

export const cardBoxStyle = {
  justifyItems: "flex",
  boxShadow: 4,
  minWidth: "fit-content",
};

export const removeIconBoxStyle = {
  display: "flex",
  justifyContent: "flex-end",
  mb: 2,
};

export const headCardBoxStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontWeight: "bold",
};

export const statsDescBoxStyle = {
  padding: 1,
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-around",
};

export const statsBoxStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row-reverse",
  mb: 2,
};
