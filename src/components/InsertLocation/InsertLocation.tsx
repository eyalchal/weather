import { Box, Button, TextField } from "@mui/material";
import { useState, type FC } from "react";
import { useDispatch } from "react-redux";
import { addLocation } from "../../redux/slices/location.slice";
import { theme } from "../../style";
import { boxStyle, buttonStyle, inputProps } from "./InsertLocation.style";

export const InsertLocation: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleButtonClick = (): void => {
    console.log("adding weather for: ", inputValue);
    dispatch(addLocation(inputValue));
  };

  return (
    <>
      <Box sx={boxStyle}>
        <TextField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          defaultValue={"Location"}
          variant="filled"
          InputProps={inputProps}
        ></TextField>
        <Button
          onClick={handleButtonClick}
          variant="contained"
          sx={buttonStyle}
        >
          הוסף תחזית
        </Button>
      </Box>
    </>
  );
};
