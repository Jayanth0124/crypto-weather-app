"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

type WeatherData = {
  location?: { name: string };
  current?: {
    temp_c: number;
    humidity: number;
    wind_kph: number;
    condition: { text: string; icon: string };
  };
};

export default function WeatherSection() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string | undefined>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch weather function
  async function fetchWeather(cityName: string) {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
        params: {
          key: process.env.NEXT_PUBLIC_WEATHER_API_KEY, // Use your actual API key
          q: cityName,
          aqi: "no",
        },
      });
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
      setError(true);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  // Auto-Detect Location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchWeather(`${lat},${lon}`);
        },
        () => fetchWeather("Hyderabad") // Fallback if denied
      );
    } else {
      fetchWeather("Hyderabad");
    }
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center relative overflow-hidden p-4 sm:p-6"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Box */}
      <motion.div
        className="relative backdrop-blur-md bg-white/10 border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-4">
          Weather Info
        </h2>

        {/* Search Box */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Enter location name..."
            value={city ?? ""}
            onChange={(e) => setCity(e.target.value || undefined)}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => city && fetchWeather(city)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
          >
            Search
          </button>
        </div>

        {/* Loading State */}
        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-400 text-center">Weather data unavailable</p>
        ) : weather?.current ? (
          <motion.div
            className="text-white text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg sm:text-2xl font-bold">{weather.location?.name}</h3>
            <p className="text-sm sm:text-lg">{weather.current.condition.text}</p>
            <img
              src={weather.current.condition.icon}
              alt="Weather Icon"
              className="mx-auto w-12 sm:w-16"
            />
            <p className="text-3xl sm:text-4xl font-semibold">{weather.current.temp_c}°C</p>
            <p className="text-sm sm:text-base">Humidity: {weather.current.humidity}%</p>
            <p className="text-sm sm:text-base">Wind Speed: {weather.current.wind_kph} km/h</p>
          </motion.div>
        ) : (
          <p className="text-white text-center">No weather data available</p>
        )}
      </motion.div>
    </div>
  );
}
