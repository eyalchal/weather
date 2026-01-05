import {
  hotIconStyle,
  cardBoxStyle,
  coldIconStyle,
  removeIconStyle,
  headCardBoxStyle,
  descriptionColor,
  pleasentIconStyle,
  removeIconBoxStyle,
} from "./weathercard.style";

import {
  HOT_TEMPERATURE,
  COLD_TEMPERATURE,
} from "../../constants/weathercard.constant";

import type { FC } from "react";
import { useDispatch } from "react-redux";
import { black, theme } from "../../style";
import HotICon from "@mui/icons-material/Sunny";
import ColdIcon from "@mui/icons-material/FlashOn";
import CancelIcon from "@mui/icons-material/Cancel";
import PleasentIcon from "@mui/icons-material/Cloud";
import { useWeather } from "../../hooks/useGetWeather";
import { Box, CircularProgress, Typography } from "@mui/material";
import { removeLocation } from "../../redux/slices/location.slice";

interface IWeatherCardProps {
  location: string;
}

export const WeatherCard: FC<IWeatherCardProps> = ({ location }) => {
  const { data: weather, error, isLoading } = useWeather(location);

  const renderIcon = () => {
    if (!weather) {
      return;
    }

    if (weather.feelsLike < COLD_TEMPERATURE) {
      return <ColdIcon sx={coldIconStyle} />;
    }

    if (weather.feelsLike > HOT_TEMPERATURE) {
      return <HotICon sx={hotIconStyle} />;
    }

    return <PleasentIcon sx={pleasentIconStyle} />;
  };

  const dispatch = useDispatch();

  const handleRemoveButton = () => {
    dispatch(removeLocation(location));
  };

  const stats = [
    { title: `טמפ' נמדדת`, value: `${weather?.temperature}°C` },
    { title: `טמפ' מורגשת`, value: `${weather?.feelsLike}°C` },
    { title: "לחות", value: `${weather?.humidity}%` },
  ];

  return (
    <>
      {error && dispatch(removeLocation(location))}

      {isLoading && (
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress color="inherit" />
        </Box>
      )}

      {weather && (
        <>
          <Box
            padding={2}
            borderRadius={2}
            component={"div"}
            sx={cardBoxStyle}
            bgcolor={theme.palette.secondary.main}
          >
            <Box sx={removeIconBoxStyle}>
              <CancelIcon sx={removeIconStyle} onClick={handleRemoveButton} />
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

            <Typography
              color={descriptionColor}
              sx={{ mt: 1, mb: 2 }}
              align="right"
            >
              {weather.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row-reverse",
              }}
            >
              {stats.map((stat) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography>{stat.title}</Typography>
                  <Typography variant="h5" my={2}>
                    {stat.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </>
      )}
    </>
  );
};
