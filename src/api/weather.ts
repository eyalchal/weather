export interface WeatherApiResponse {
  location: string;
  description: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
}

const API_KEY = "e0d49b0e1b8c6b63590281dd41f6aff3";

export const fetchWeather = async (
  location: string
): Promise<WeatherApiResponse> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=he&appid=${API_KEY}`
  );

  if (!res.ok) throw new Error("Failed to fetch weather");

  const data = await res.json();

  return {
    location: data.name,
    description: data.weather[0].description,
    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
  };
};
