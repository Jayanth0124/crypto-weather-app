import "./globals.css";
import Image from 'next/image';

<Image src="/path-to-image.jpg" alt="description" width={500} height={300} />

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Crypto Weather Dashboard</title>
        <meta name="description" content="Live Crypto and Weather Updates" />
      </head>
      <body className="bg-background text-textPrimary flex flex-col min-h-screen">
        {/* Header */}
        <header
          className="bg-primary text-center text-lg font-bold p-5 mx-6 mt-6 rounded-2xl
          shadow-[6px_6px_12px_rgba(0,0,0,0.2),_-6px_-6px_12px_rgba(255,255,255,0.1)] 
          border border-white/10 flex items-center justify-center gap-3 transition-all
          hover:shadow-[8px_8px_16px_rgba(0,0,0,0.3),_-8px_-8px_16px_rgba(255,255,255,0.1)]
          hover:bg-opacity-80 hover:scale-105 duration-300"
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-cloud-bitcoin-icon-download-in-svg-png-gif-file-formats--logo-rain-pack-science-technology-icons-2425920.png?f=webp&w=512"
            alt="Crypto Weather Logo"
            className="w-10 h-10 drop-shadow-lg"
          />
          <span className="text-gray-200 tracking-wide drop-shadow-md">
            Crypto Weather Dashboard
          </span>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer
          className="bg-secondary text-center py-4 mx-6 mb-6 rounded-2xl 
          shadow-[6px_6px_12px_rgba(0,0,0,0.2),_-6px_-6px_12px_rgba(255,255,255,0.1)] 
          border border-white/10 transition-all 
          hover:shadow-[8px_8px_16px_rgba(0,0,0,0.3),_-8px_-8px_16px_rgba(255,255,255,0.1)]
          hover:scale-105 duration-300"
        >
          <span className="text-gray-300">
            Designed by{" "}
            <a
              href="https://www.jayanth.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-all font-semibold"
            >
              Donavalli Jayanth
            </a>
          </span>
        </footer>
      </body>
    </html>
  );
}
