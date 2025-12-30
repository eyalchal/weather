import PleasentIcon from "@mui/icons-material/Cloud";
import ColdIcon from "@mui/icons-material/FlashOn";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import HotICon from "@mui/icons-material/Sunny";
import { Box, CircularProgress, Typography } from "@mui/material";
import type { FC } from "react";
import { useDispatch } from "react-redux";
import { useWeather } from "../../hooks/useGetWeather";
import { removeLocation } from "../../redux/slices/location.slice";
import { black, theme } from "../../style";
import type { TLocation } from "../../types";
import {
  COLD_TEMPERATURE,
  EStatus,
  HOT_TEMPERATURE,
} from "./weathercard.constant";
import {
  cardBoxStyle,
  coldIconStyle,
  descriptionColor,
  headCardBoxStyle,
  hotIconStyle,
  pleasentIconStyle,
  removeIconBoxStyle,
  removeIconStyle,
  statsBoxStyle,
  statsDescBoxStyle,
} from "./weathercard.style";

interface IWeatherCardProps {
  location: TLocation;
}

export const WeatherCard: FC<IWeatherCardProps> = ({ location }) => {
  const { data: weather, status } = useWeather(location);

  console.log("weather", weather, status);

  const renderIcon = () => {
    return weather!.feelsLike < COLD_TEMPERATURE ? (
      <ColdIcon sx={coldIconStyle} />
    ) : weather!.feelsLike > HOT_TEMPERATURE ? (
      <HotICon sx={hotIconStyle} />
    ) : (
      <PleasentIcon sx={pleasentIconStyle} />
    );
  };

  const dispatch = useDispatch();

  const handleRemoveButton = () => {
    console.log("Clicked remove icon for location:", location);
    dispatch(removeLocation(location));
  };

  return (
    <>
      {status === EStatus.Error && dispatch(removeLocation(location))}
      {status === EStatus.Loading && <CircularProgress color="inherit" />}
      {status === EStatus.Success && (
        <>
          <Box
            component={"div"}
            bgcolor={theme.palette.secondary.main}
            padding={2}
            borderRadius={2}
            sx={cardBoxStyle}
          >
            <Box sx={removeIconBoxStyle}>
              <RemoveCircleIcon
                sx={removeIconStyle}
                onClick={handleRemoveButton}
              />
            </Box>

            <Box sx={headCardBoxStyle}>
              {renderIcon()}
              <Typography
                color={black}
                variant="h5"
                sx={{ fontWeight: "bold" }}
              >
                {weather.location}
              </Typography>
            </Box>
            <Typography color={descriptionColor} sx={{ my: 1 }} align="right">
              {weather.description}
            </Typography>
            <Box sx={statsDescBoxStyle}>
              <Typography>טמפ' נמדדת</Typography>
              <Typography mx={2}>טמפ' מורגשת</Typography>
              <Typography mr={2}>לחות</Typography>
            </Box>
            <Box justifyContent={"center"} sx={statsBoxStyle}>
              <Typography variant="h5" fontWeight={"medium"}>
                {weather.temperature}°C
              </Typography>
              <Typography variant="h5" fontWeight={"medium"}>
                {weather.feelsLike}°C
              </Typography>
              <Typography variant="h5" fontWeight={"medium"}>
                {weather.humidity}%
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
