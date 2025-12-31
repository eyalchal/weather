import type { TLocation } from "../types";

export interface WeatherApiResponse {
  humidity: number;
  feelsLike: number;
  location: TLocation;
  description: string;
  temperature: number;
}

const API_KEY = "e0d49b0e1b8c6b63590281dd41f6aff3";

export const fetchWeather = async (
  location: TLocation
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
