import { API_KEY } from "../constants/weather-service.constant";
import type { WeatherApiResponse } from "../interfaces/weather-api.interface";

export const fetchWeather = async (
  location: string
): Promise<WeatherApiResponse> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=he&appid=${API_KEY}`
  );

  if (res.ok) {
    console.log(`Weather successfuly fetched for ${location}`);
  } else {
    console.log(`Failed to fetch weather for ${location}`);
  }

  const data = await res.json();

  return {
    location: data.name,
    humidity: data.main.humidity,
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    feelsLike: Math.round(data.main.feels_like),
  };
};
