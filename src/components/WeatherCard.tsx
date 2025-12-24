import type { FC } from "react";
import { ICON_COLORS, theme } from "../style";
import { Box, Typography } from "@mui/material";
import SunnyIcon from "@mui/icons-material/Sunny";
import CloudIcon from "@mui/icons-material/Cloud";
import { useWeather } from "../hooks/useGetWeather";
import FlashOnIcon from "@mui/icons-material/FlashOn";

interface IWeatherCardProps {
  city: string;
}

export const WeatherCard: FC<IWeatherCardProps> = ({ city }) => {
  const { data: weather, status } = useWeather(city);

  console.log("weather", weather, status);

  let icon;

  if (status === "success") {
    icon =
      weather.feelsLike < 20 ? (
        <FlashOnIcon
          display="flex"
          sx={{ color: ICON_COLORS.COLD, fontSize: "h4.fontSize" }}
        />
      ) : weather.feelsLike > 30 ? (
        <SunnyIcon
          display="flex"
          sx={{ color: ICON_COLORS.HOT, fontSize: "h4.fontSize" }}
        />
      ) : (
        <CloudIcon
          display="flex"
          sx={{ color: ICON_COLORS.PLEASANT, fontSize: "h4.fontSize" }}
        />
      );
  }

  return (
    <>
      {status === "error" && <div>Error fetching data</div>}

      {status === "pending" && <div>Loading data...</div>}
      {status === "success" && (
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
              display="flex"
              color="black"
              variant="h5"
              sx={{ fontWeight: "bold" }}
            >
              {weather.city}
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
      )}
    </>
  );
};
