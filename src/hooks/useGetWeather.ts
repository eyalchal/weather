import { useQuery } from "@tanstack/react-query";
import { fetchWeather, type WeatherApiResponse } from "../api/weather";

export const useWeather = (city: string) => {
  return useQuery<WeatherApiResponse>({
    queryKey: ["weatherData", city],
    queryFn: () => fetchWeather(city),
  });
}
