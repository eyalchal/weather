import {
  EStatus,
  HOT_TEMPERATURE,
  COLD_TEMPERATURE,
} from "./weathercard.constant";

import {
  hotIconStyle,
  cardBoxStyle,
  coldIconStyle,
  statsBoxStyle,
  removeIconStyle,
  headCardBoxStyle,
  descriptionColor,
  statsDescBoxStyle,
  pleasentIconStyle,
  removeIconBoxStyle,
} from "./weathercard.style";

import type { FC } from "react";
import { useDispatch } from "react-redux";
import { black, theme } from "../../style";
import type { TLocation } from "../../types";
import HotICon from "@mui/icons-material/Sunny";
import ColdIcon from "@mui/icons-material/FlashOn";
import PleasentIcon from "@mui/icons-material/Cloud";
import { useWeather } from "../../hooks/useGetWeather";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Box, CircularProgress, Typography } from "@mui/material";
import { removeLocation } from "../../redux/slices/location.slice";

interface IWeatherCardProps {
  location: TLocation;
}

export const WeatherCard: FC<IWeatherCardProps> = ({ location }) => {
  const { data: weather, status } = useWeather(location);

  console.log(weather);

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
    dispatch(removeLocation(location));
  };

  return (
    <>
      {status === EStatus.Error && dispatch(removeLocation(location))}

      {status === EStatus.Loading && (
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress color="inherit" />
        </Box>
      )}

      {status === EStatus.Success && (
        <>
          <Box
            padding={2}
            borderRadius={2}
            component={"div"}
            sx={cardBoxStyle}
            bgcolor={theme.palette.secondary.main}
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
                variant="h5"
                color={black}
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
