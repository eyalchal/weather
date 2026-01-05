import {
  boxStyle,
  inputProps,
  buttonStyle,
  textFieldStyle,
} from "./InsertLocation.style";

import { useDispatch } from "react-redux";
import { Box, Button, InputLabel, TextField } from "@mui/material";
import { useState, type FC, type KeyboardEvent } from "react";
import { addLocation } from "../../redux/slices/location.slice";
import { BUTTON_TEXT, LABEL } from "../../constants/insertlocation.constant";

export const InsertLocation: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleButtonClick = (): void => {
    dispatchAddLocation();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatchAddLocation();
    }
  };

  const dispatchAddLocation = (): void => {
    dispatch(addLocation(inputValue));
  };

  return (
    <>
      <Box sx={boxStyle}>
        <TextField
          label={LABEL}
          value={inputValue}
          variant="outlined"
          sx={textFieldStyle}
          InputProps={inputProps}
          onKeyDown={handleKeyDown}
          onChange={(event) => setInputValue(event.target.value)}
        ></TextField>
        <Button
          sx={buttonStyle}
          variant="contained"
          onClick={handleButtonClick}
        >
          {BUTTON_TEXT}
        </Button>
      </Box>
    </>
  );
};
