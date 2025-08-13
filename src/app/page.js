"use client";
import Image from "next/image";
import { useState } from "react";

const clubs = [
  // ...existing club data...
  {
    name: "Tinkerhub",
    logo: "/next.svg",
    whatsapp: "https://chat.whatsapp.com/TinkerhubLink",
  },
  {
    name: "MLSA",
    logo: "/vercel.svg",
    whatsapp: "https://chat.whatsapp.com/DesignClubLink",
  },
  {
    name: "Cyber",
    logo: "/globe.svg",
    whatsapp: "https://chat.whatsapp.com/SportsClubLink",
  },
  {
    name: "FOSS",
    logo: "/next.svg",
    whatsapp: "https://chat.whatsapp.com/TinkerhubLink",
  },
  {
    name: "OpenMind",
    logo: "/vercel.svg",
    whatsapp: "https://chat.whatsapp.com/DesignClubLink",
  },
  {
    name: "Coders",
    logo: "/coders.png",
    whatsapp: "https://whatsapp.com/channel/0029Vb7oTNQFHWpzlsoZlI33",
  },
  {
    name: "YIP",
    logo: "/next.svg",
    whatsapp: "https://chat.whatsapp.com/TinkerhubLink",
  },
  {
    name: "WOW",
    logo: "/vercel.svg",
    whatsapp: "https://chat.whatsapp.com/DesignClubLink",
  },
  {
    name: "AWS",
    logo: "/globe.svg",
    whatsapp: "https://chat.whatsapp.com/SportsClubLink",
  },
  {
    name: "Space",
    logo: "/next.svg",
    whatsapp: "https://chat.whatsapp.com/TinkerhubLink",
  },
  {
    name: "MuLearn",
    logo: "/vercel.svg",
    whatsapp: "https://chat.whatsapp.com/DesignClubLink",
  },
  {
    name: "GDG",
    logo: "/globe.svg",
    whatsapp: "https://chat.whatsapp.com/SportsClubLink",
  },
];

export default function Home() {
  const [flipped, setFlipped] = useState(Array(clubs.length).fill(false));

  // Handle card flip on hover (desktop) or tap (mobile)
  const handleFlip = (idx) => {
    setFlipped((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-purple-700 drop-shadow-lg">
        Join a Club WhatsApp Channel
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl">
        {clubs.map((club, idx) => (
          <div key={club.name} className="perspective">
            <div
              className={`relative w-64 h-80 transition-transform duration-700 transform-style-preserve-3d ${
                flipped[idx] ? "rotate-y-180" : ""
              }`}
              onMouseEnter={() => handleFlip(idx)}
              onMouseLeave={() => handleFlip(idx)}
              onClick={() => handleFlip(idx)}
              style={{ cursor: "pointer" }}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 backface-hidden">
                <Image
                  src={club.logo}
                  alt={club.name + " logo"}
                  width={90}
                  height={90}
                  className="mb-4"
                />
                <span className="text-2xl font-bold mb-2 text-center text-gray-800 tracking-wide">
                  {club.name}
                </span>
                <span className="text-sm text-gray-600 mb-2">
                  Tap or hover to join WhatsApp
                </span>
                <span className="mt-4 text-xs text-purple-400">Club Card</span>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-gradient-to-br from-white via-blue-100 to-purple-100 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
                <Image
                  src={club.logo}
                  alt={club.name + " logo"}
                  width={60}
                  height={60}
                  className="mb-2"
                />
                <h2 className="text-xl font-bold mb-2 text-center text-gray-900">
                  {club.name}
                </h2>
                <div className="flex flex-col items-center w-full">
                  <div
                    className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center w-full"
                    style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}
                  >
                    <Image
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                        club.whatsapp
                      )}`}
                      alt="WhatsApp QR Code"
                      width={180}
                      height={180}
                      className="rounded border border-gray-200"
                      unoptimized
                    />
                  </div>
                  <a
                    href={club.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 font-semibold shadow-md w-full text-center"
                    style={{
                      marginTop: "0.5rem",
                      maxWidth: "180px",
                      alignSelf: "center",
                    }}
                  >
                    Join WhatsApp Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Custom styles for flip animation */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180.backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
