import { API_KEY } from "../constants/weather-service.constant";
import type { WeatherApiResponse } from "../interfaces/weather-api.interface";

export const fetchWeather = async (
  location: string
): Promise<WeatherApiResponse> => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=he&appid=${API_KEY}`
    );

    const data = await res.json();
    console.log(`Weather successfuly fetched for ${location}`);

    return {
      location: data.name,
      humidity: data.main.humidity,
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      feelsLike: Math.round(data.main.feels_like),
    };
  } catch (error) {
    console.log(`Failed to fetch weather for ${location}`);
    throw error;
  }
};
