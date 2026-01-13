import { useDispatch } from "react-redux";
import { useStyles } from "./InsertLocation.style";
import { Box, Button, TextField } from "@mui/material";
import { useState, type FC, type KeyboardEvent } from "react";
import { addLocation } from "../../redux/slices/location.slice";
import { BUTTON_TEXT, LABEL } from "../../constants/insertlocation.constant";

export const InsertLocation: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleButtonClick = (): void => {
    dispatch(addLocation(inputValue));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(addLocation(inputValue));
    }
  };

  const styles = useStyles();

  return (
    <>
      <Box sx={styles.box}>
        <TextField
          label={LABEL}
          value={inputValue}
          variant="outlined"
          sx={styles.textField}
          InputProps={styles.inputProps}
          onKeyDown={handleKeyDown}
          onChange={(event) => setInputValue(event.target.value)}
        ></TextField>
        <Button
          sx={styles.button}
          variant="contained"
          onClick={handleButtonClick}
        >
          {BUTTON_TEXT}
        </Button>
      </Box>
    </>
  );
};
