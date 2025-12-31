import { useState, type FC } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, colors, TextField } from "@mui/material";
import { buttonText, label } from "./insertlocation.constant";
import { addLocation } from "../../redux/slices/location.slice";
import { boxStyle, buttonStyle, inputProps } from "./InsertLocation.style";
import { black } from "../../style";

export const InsertLocation: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleButtonClick = (): void => {
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
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: 4, // Set the desired border width
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderWidth: 5, // Set hover border width
            },
            // "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            //   borderWidth: 6, // Set focused border width
            //   borderColor: "white",
            // },
          }}
          // InputLabelProps={{color:'primary', margin:'dense', }}
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
