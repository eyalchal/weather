import type { TLocation } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather, type WeatherApiResponse } from "../api/weather";

export const useWeather = (location: TLocation) => {
  return useQuery<WeatherApiResponse>({
    queryKey: ["weatherData", location],
    queryFn: () => fetchWeather(location),
  });
};
