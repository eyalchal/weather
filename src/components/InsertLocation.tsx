import { Box, Button, TextField } from "@mui/material";
import { useState, type FC } from "react";
import { theme } from "../style";
import { useDispatch } from "react-redux";
import { addLocation } from "../redux/slices/location.slice";
import { useAppSelector } from "../redux/redux.hooks";
import type { TLocation } from "../types";

export const InsertLocation: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleButtonClick = (): void => {
    alert(inputValue);
    dispatch(addLocation(inputValue));
  };

  return (
    <>
      <Box sx={{ position: "fixed", bottom: 20, display: "flex", gap: 2, marginTop: 2, alignItems: "center" }}>
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          defaultValue={"Location"}
          variant="filled"
        ></TextField>
        <Button
          onClick={handleButtonClick}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.secondary.main,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Add Location
        </Button>
      </Box>
    </>
  );
};
