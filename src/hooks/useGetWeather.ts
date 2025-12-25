import { useQuery } from "@tanstack/react-query";
import { fetchWeather, type WeatherApiResponse } from "../api/weather";

export const useWeather = (location: string) => {
  return useQuery<WeatherApiResponse>({
    queryKey: ["weatherData", location],
    queryFn: () => fetchWeather(location),
  });
}
