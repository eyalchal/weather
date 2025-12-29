import type { FC } from "react";
import { ICON_COLORS, theme } from "../style";
import { Box, Typography } from "@mui/material";
import SunnyIcon from "@mui/icons-material/Sunny";
import CloudIcon from "@mui/icons-material/Cloud";
import { useWeather } from "../hooks/useGetWeather";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { COLD_TEMPERATURE, HOT_TEMPERATURE } from "../constants";
import type { TLocation } from "../types";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useDispatch } from "react-redux";
import { removeLocation } from "../redux/slices/location.slice";

interface IWeatherCardProps {
  location: TLocation;
}

export const WeatherCard: FC<IWeatherCardProps> = ({ location }) => {
  const { data: weather, status } = useWeather(location);

  console.log("weather", weather, status);

  let icon;

  if (status === "success") {
    icon =
      weather.feelsLike < COLD_TEMPERATURE ? (
        <FlashOnIcon sx={{ color: ICON_COLORS.COLD, fontSize: "2.5rem" }} />
      ) : weather.feelsLike > HOT_TEMPERATURE ? (
        <SunnyIcon sx={{ color: ICON_COLORS.HOT, fontSize: "2.5rem" }} />
      ) : (
        <CloudIcon sx={{ color: ICON_COLORS.PLEASANT, fontSize: "2.5rem" }} />
      );
  }

  const dispatch = useDispatch();

  return (
    <>
      {status === "error" && <div>Error fetching data</div>}
      {status === "pending" && <div>Loading data...</div>}
      {status === "success" && (
        <>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <RemoveCircleIcon
            sx={{ color: "red", cursor: "pointer", fontSize: "2rem" }}
            onClick={() => {
              console.log("Clicked remove icon for location:", location);
              dispatch(removeLocation(location));
            }}
          />
        </Box>
          
          <Box
            component={"div"}
            bgcolor={theme.palette.secondary.main}
            padding={2}
            borderRadius={2}
            sx={{ justifyItems: "flex", boxShadow: 4, minWidth: "fit-content" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              {icon}
              <Typography
                color="black"
                variant="h5"
                sx={{ fontWeight: "bold" }}
              >
                {weather.location}
              </Typography>
            </Box>
            <Typography color="#8F8F8F" sx={{ my: 1 }} align="right">
              {weather.description}
            </Typography>
            <Box
              sx={{
                padding: 1,
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "space-around",
              }}
            >
              <Typography>טמפ' נמדדת</Typography>
              <Typography>טמפ' מורגשת</Typography>
              <Typography>לחות</Typography>
            </Box>
            <Box
              justifyContent={"center"}
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row-reverse",
                mb: 2,
              }}
            >
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
