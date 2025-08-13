"use client";
import Image from "next/image";
import { useState } from "react";

const clubs = [
  {
    name: "Tinkerhub",
    logo: "/next.svg", // Replace with actual logo path
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
    logo: "/next.svg", // Replace with actual logo path
    whatsapp: "https://chat.whatsapp.com/TinkerhubLink",
  },
  {
    name: "OpenMind",
    logo: "/vercel.svg",
    whatsapp: "https://chat.whatsapp.com/DesignClubLink",
  },
  {
    name: "Coders",
    logo: "/globe.svg",
    whatsapp: "https://chat.whatsapp.com/SportsClubLink",
  },
  {
    name: "YIP",
    logo: "/next.svg", // Replace with actual logo path
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
    logo: "/next.svg", // Replace with actual logo path
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
  const [selectedClub, setSelectedClub] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Join a Club WhatsApp Channel
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {clubs.map((club) => (
          <div
            key={club.name}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelectedClub(club)}
          >
            <Image
              src={club.logo}
              alt={club.name + " logo"}
              width={80}
              height={80}
              className="mb-4"
            />
            <span className="text-lg font-semibold mb-2 text-center hover:underline">
              {club.name}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Tap to join WhatsApp
            </span>
          </div>
        ))}
      </div>

      {/* Modal for QR code */}
      {selectedClub && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg flex flex-col items-center relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl"
              onClick={() => setSelectedClub(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <Image
              src={selectedClub.logo}
              alt={selectedClub.name + " logo"}
              width={60}
              height={60}
              className="mb-2"
            />
            <h2 className="text-xl font-bold mb-2 text-center">
              {selectedClub.name}
            </h2>
            <p className="mb-4 text-center">Scan to join WhatsApp channel</p>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
                selectedClub.whatsapp
              )}`}
              alt="WhatsApp QR Code"
              className="mb-4 rounded"
              width={200}
              height={200}
            />
            <a
              href={selectedClub.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-medium"
            >
              Join WhatsApp Channel
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
