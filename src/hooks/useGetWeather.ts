import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../services/weather.service";
import type { WeatherApiResponse } from "../interfaces/weather-api.interface";

export const useWeather = (location: string) => {
  return useQuery<WeatherApiResponse>({
    queryKey: ["weatherData", location],
    queryFn: () => fetchWeather(location),
  });
};
