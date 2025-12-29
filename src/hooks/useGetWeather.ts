import { useQuery } from "@tanstack/react-query";
import { fetchWeather, type WeatherApiResponse } from "../api/weather";
import type { TLocation } from "../types";

export const useWeather = (location: TLocation) => {
  return useQuery<WeatherApiResponse>({
    queryKey: ["weatherData", location],
    queryFn: () => fetchWeather(location),
  });
}
