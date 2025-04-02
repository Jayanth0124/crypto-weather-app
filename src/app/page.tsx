"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CryptoSection from "./components/CryptoSection";
import WeatherSection from "./components/WeatherSection";

export default function Home() {
  return (
    <main className="p-6">
      <CryptoSection />
      <WeatherSection />
    </main>
  );
}
