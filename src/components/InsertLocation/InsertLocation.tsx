import {
  boxStyle,
  buttonStyle,
  inputProps,
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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === EKey.Enter) {
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
          onChange={(e) => setInputValue(e.target.value)}
          variant="outlined"
          sx={textFieldStyle}
          InputProps={inputProps}
          onKeyDown={handleKeyDown}
        ></TextField>
        <Button
          sx={buttonStyle}
          onClick={handleButtonClick}
          variant="contained"
        >
          {buttonText}
        </Button>
      </Box>
    </>
  );
};
