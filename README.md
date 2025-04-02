# 🚀 CryptoWeather Nexus

![CryptoWeather Nexus](public/interface.png)

## 🌟 Overview

**CryptoWeather Nexus** is a powerful multi-page dashboard that combines **real-time weather updates**, **cryptocurrency tracking**, and **live notifications** via WebSockets. Built using **Next.js**, **React**, **Redux**, and **Tailwind CSS**, this app ensures a seamless and premium experience.

🔗 **Live Demo:** [Smash here](https://skybitx.vercel.app/)  

---

## 🚀 Features

### 📍 Weather Section
- 🌤 Live weather updates for multiple cities (New York, London, Tokyo).
- 📊 Displays temperature, humidity, and conditions.

### 💰 Crypto Tracker
- 🚀 Live tracking of Bitcoin, Ethereum, and other cryptocurrencies.
- 📊 Displays market price, 24h changes, and market cap.
- 🔴 WebSocket-based real-time price updates.
- 📈 Historical pricing & extended metrics.


### 🎨 Premium UI & Responsive Design
- 🌐 Beautiful, modern **UI built with Tailwind CSS**.
- 📱 Fully responsive across **mobile, tablet, and desktop**.
- 🎭 Dark and light mode compatibility (optional).

---

## ⚡ Tech Stack

| Technology | Description |
|------------|-------------|
| **Next.js** | React-based framework for SSR/SSG |
| **React** | Frontend library for UI |
| **Redux** | State management with Thunk |
| **Tailwind CSS** | Modern styling |
| **WebSockets** | Real-time crypto price updates |
| **OpenWeather API** | Live weather data |
| **CoinGecko API** | Cryptocurrency market tracking |
| **NewsData.io** | Fetches latest crypto news |

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Jayanth0124/crypto-weather-app.git
cd crypto-weather-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file in the root directory and add:

```
NEXT_PUBLIC_WEATHER_API_KEY=your_openweather_api_key
NEXT_PUBLIC_CRYPTO_API_KEY=your_coingecko_api_key
NEXT_PUBLIC_NEWS_API_KEY=your_newsdata_api_key
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

🌍 Open **http://localhost:3000** to view in your browser.

---

## 🚀 Deployment

Easily deploy to **Vercel** or **Netlify**:

### Deploy on **Vercel**

```bash
vercel deploy
```

### Deploy on **Github**

```bash
github deploy
```

---

## 🔥 Challenges & Solutions

### 🔄 WebSocket Handling  
**Problem:** Managing real-time crypto price updates efficiently.  
✅ **Solution:** Used **CoinCap WebSockets** to push live updates, reducing API calls.

### ⚡ API Rate Limits  
**Problem:** OpenWeather and CoinGecko APIs have request limits.  
✅ **Solution:** Implemented **caching & debouncing** to optimize API usage.

### 📱 Responsive UI  
**Problem:** Designing a dashboard that works on all devices.  
✅ **Solution:** Used **Tailwind CSS** for a **fully responsive, pixel-perfect** UI.

---

## 🎯 Future Enhancements
✅ Advanced filtering for cryptocurrencies.  
✅ Multi-theme support (Light/Dark mode).  
✅ User authentication & profile customization.

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. **Fork** the repo.
2. Create a **feature branch**: `git checkout -b feature-name`.
3. Commit and **push** your changes.
4. Open a **pull request**.

⭐ If you like this project, **please give it a star!** ⭐

---

## 📩 Contact

💬 **Author:** Donavalli Jayanth  
📧 **Email:** [jayanthdonavalli0124@gmail.com](mailto:jayanthdonavalli0124@gmail.com)  
🌐 **Portfolio:** [jayanth.xyz](https://www.jayanth.xyz)

