import {
  boxStyle,
  inputProps,
  buttonStyle,
  textFieldStyle,
} from "./InsertLocation.style";

import { useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import { useState, type FC, type KeyboardEvent } from "react";
import { addLocation } from "../../redux/slices/location.slice";
import { buttonText, EKey, label } from "./insertlocation.constant";

export const InsertLocation: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleButtonClick = (): void => {
    dispatchAddLocation();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === EKey.Enter) {
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
          label={label}
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
          {buttonText}
        </Button>
      </Box>
    </>
  );
};
