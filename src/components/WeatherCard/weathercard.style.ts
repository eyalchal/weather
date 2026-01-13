import { ICON_COLORS } from "../../constants/weathercard.constant";
import { createStyles } from "../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    hotIcon: { color: ICON_COLORS.HOT, fontSize: "2.5rem" },
    coldIcon: { color: ICON_COLORS.COLD, fontSize: "2.5rem" },
    pleasentIcon: {
      fontSize: "2.5rem",
      color: ICON_COLORS.PLEASANT,
    },
    removeIcon: {
      color: "red",
      fontSize: "2rem",
      cursor: "pointer",
    },
    cardBox: {
      boxShadow: 4,
      justifyItems: "flex",
      minWidth: "fit-content",
    },
    removeIconBox: {
      display: "flex",
      justifyContent: "flex-end",
    },
    cardHeadBox: {
      display: "flex",
      fontWeight: "bold",
      alignItems: "center",
      justifyContent: "space-between",
    },
    statsBox: {
      mb: 1,
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "space-around",
    },
    statBox: {
      p: 1,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  });
