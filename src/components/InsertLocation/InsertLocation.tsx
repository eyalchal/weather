import { useState, type FC } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import { buttonText, label } from "./insertlocation.constant";
import { addLocation } from "../../redux/slices/location.slice";
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
          label={label}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          variant="filled"
          InputProps={inputProps}
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
