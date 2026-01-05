import {
  HOT_TEMPERATURE,
  COLD_TEMPERATURE,
  descriptionColor,
} from "../../constants/weathercard.constant";

import type { FC } from "react";
import { useDispatch } from "react-redux";
import { BLACK, theme } from "../../style";
import { useStyles } from "./weathercard.style";
import HotIcon from "@mui/icons-material/Sunny";
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

  const styles = useStyles();

  const renderIcon = () => {
    if (!weather) {
      return;
    }

    if (weather.feelsLike < COLD_TEMPERATURE) {
      return <ColdIcon sx={styles.coldIcon} />;
    }

    if (weather.feelsLike > HOT_TEMPERATURE) {
      return <HotIcon sx={styles.hotIcon} />;
    }

    return <PleasentIcon sx={styles.pleasentIcon} />;
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
            sx={styles.cardBox}
            bgcolor={theme.palette.secondary.main}
          >
            <Box sx={styles.removeIconBox}>
              <CancelIcon sx={styles.removeIcon} onClick={handleRemoveButton} />
            </Box>

            <Box sx={styles.cardHeadBox}>
              {renderIcon()}
              <Typography
                variant="h5"
                color={BLACK}
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

            <Box sx={styles.statsBox}>
              {stats.map((stat) => (
                <Box sx={styles.statBox}>
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
