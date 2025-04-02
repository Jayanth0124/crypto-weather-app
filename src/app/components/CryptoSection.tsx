"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

type CryptoData = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  sparkline_in_7d: { price: number[] };
};

export default function CryptoSection() {
  const [cryptoList, setCryptoList] = useState<CryptoData[]>([]);
  const [trendingCoins, setTrendingCoins] = useState<CryptoData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchCryptoData() {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 50,
            page: 1,
            sparkline: true,
          },
        }
      );
      setCryptoList(response.data);
      setTrendingCoins(response.data.slice(0, 3));
    } catch (error) {
      console.error("Error fetching crypto data", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const filteredCryptos = cryptoList.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center p-6 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative w-full max-w-3xl bg-gray-800/80 p-6 rounded-2xl shadow-lg text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-4">Crypto Market</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Cryptocurrency..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Trending Coins */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">🔥 Trending Coins</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {trendingCoins.map((coin) => (
              <div
                key={coin.id}
                className="bg-gray-700 p-4 rounded-xl flex flex-col items-center shadow-lg w-full sm:w-auto"
              >
                <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                <p className="font-semibold mt-2">{coin.name}</p>
                <p className="text-green-400">${coin.current_price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crypto Prices List */}
        <div>
          <h3 className="text-xl font-semibold mb-3">📊 Crypto Prices</h3>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            filteredCryptos.slice(0, 5).map((coin) => (
              <div
                key={coin.id}
                className="bg-gray-700 p-4 rounded-xl mb-4 flex flex-col sm:flex-row justify-between items-center shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                  <div>
                    <p className="font-semibold">{coin.name}</p>
                    <p className="text-green-400">${coin.current_price}</p>
                    <p
                      className={
                        coin.price_change_percentage_24h >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    >
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </div>
                </div>

                {/* Mini Line Chart */}
                <div className="w-full sm:w-32 h-16 mt-4 sm:mt-0">
                  <Line
                    data={{
                      labels: Array.from({ length: coin.sparkline_in_7d.price.length }, (_, i) => i),
                      datasets: [
                        {
                          data: coin.sparkline_in_7d.price,
                          borderColor: "rgb(75, 192, 192)",
                          backgroundColor: "rgba(75, 192, 192, 0.2)",
                          borderWidth: 2,
                          tension: 0.2,
                          pointRadius: 0,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: { x: { display: false }, y: { display: false } },
                    }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
}
