"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ChevronRight,
  Users,
  Smartphone,
  Star,
  Zap,
  Globe,
} from "lucide-react";

const clubs = [
  {
    name: "Tinkerhub",
    logo: "/tinkerhub.svg",
    description: "Innovation & Technology Community",
    whatsapp: "https://chat.whatsapp.com/FFr1d4DPHKp1x4CZfAvFWD?mode=ac_t",
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "MLSA",
    logo: "/mlsa.png",
    description: "Microsoft Learn Student Ambassadors",
    whatsapp: "https://chat.whatsapp.com/DesignClubLink",
    color: "from-green-500 to-teal-600",
  },
  {
    name: "Cyber",
    logo: "/cyber.png",
    description: "Cybersecurity & Ethical Hacking",
    whatsapp: "https://whatsapp.com/channel/0029Vb9j6Z87IUYTULlbHM2w",
    color: "from-red-500 to-pink-600",
  },
  {
    name: "FOSS",
    logo: "/foss.png",
    description: "Free & Open Source Software",
    whatsapp: "https://chat.whatsapp.com/TinkerhubLink",
    color: "from-orange-500 to-red-600",
  },
  {
    name: "OpenMind",
    logo: "/vercel.svg",
    description: "Psychology & Mental Health",
    whatsapp: "https://chat.whatsapp.com/DesignClubLink",
    color: "from-indigo-500 to-purple-600",
  },
  {
    name: "Coders",
    logo: "/coders.png",
    description: "Programming & Development",
    whatsapp: "https://whatsapp.com/channel/0029Vb7oTNQFHWpzlsoZlI33",
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "YIP",
    logo: "/yip.png",
    description: "Young Innovators Program",
    whatsapp: "https://chat.whatsapp.com/TinkerhubLink",
    color: "from-yellow-500 to-orange-600",
  },
  {
    name: "WOW",
    logo: "/wow.png",
    description: "Women of Wonder",
    whatsapp: "https://whatsapp.com/channel/0029VbB53nN4yltQ7WTJ7G3E",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "AWS",
    logo: "/aws.png",
    description: "Amazon Web Services Community",
    whatsapp: "https://whatsapp.com/channel/0029VbB53nN4yltQ7WTJ7G3E",
    color: "from-amber-500 to-yellow-600",
  },
  {
    name: "Space",
    logo: "/space.png",
    description: "Space Technology & Astronomy",
    whatsapp: "https://chat.whatsapp.com/TinkerhubLink",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "MuLearn",
    logo: "/mulearn.png",
    description: "Mutual Learning Community",
    whatsapp: "https://whatsapp.com/channel/0029Vb69jPaFcowBuFTv8y2X",
    color: "from-emerald-500 to-green-600",
  },
  {
    name: "KBA",
    logo: "/kba.png",
    description: "Kerala Blockchain Academy",
    whatsapp: "https://whatsapp.com/channel/0029Vb6n7RiLo4hftoopNJ1v",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "GDG",
    logo: "/globe.svg",
    description: "Google Developer Groups",
    whatsapp: "https://chat.whatsapp.com/SportsClubLink",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "WTM",
    logo: "/wtm.png",
    description: "Women Techmakers",
    whatsapp: "https://chat.whatsapp.com/SportsClubLink",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "IEDC",
    logo: "/iedc.png",
    description: "Innovation and Entrepreneurship Development Cell",
    whatsapp: "https://whatsapp.com/channel/0029VaAYL1D2f3EAIot5Yl2N",
    color: "from-blue-500 to-indigo-600",
  },
];

export default function Home() {
  const [flipped, setFlipped] = useState(Array(clubs.length).fill(false));
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleFlip = (idx) => {
    setFlipped((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  const handleCardClick = (idx, whatsappLink) => {
    if (isMobile) {
      window.open(whatsappLink, "_blank", "noopener,noreferrer");
    } else {
      handleFlip(idx);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-blue-400/40 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-ping delay-300"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 min-h-screen">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Connect. Learn.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Grow.
            </span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Join vibrant tech communities where innovation meets collaboration.
            Build your network, share knowledge, and accelerate your growth.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-blue-400" />
              <span>Global Community</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-green-400" />
              <span>Expert Mentors</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-400" />
              <span>Premium Content</span>
            </div>
          </div>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl">
          {clubs.map((club, idx) => (
            <div key={club.name} className="perspective group">
              <div
                className={`relative w-full aspect-[3/4] transition-all duration-700 transform-style-preserve-3d cursor-pointer ${
                  flipped[idx] && !isMobile ? "rotate-y-180" : ""
                } ${
                  !isMobile
                    ? "group-hover:scale-105 group-hover:-translate-y-2"
                    : ""
                }`}
                onMouseEnter={() => !isMobile && handleFlip(idx)}
                onMouseLeave={() => !isMobile && handleFlip(idx)}
                onClick={() => handleCardClick(idx, club.whatsapp)}
              >
                {/* Enhanced Front Side */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center justify-center p-6 backface-hidden hover:border-white/40 transition-all duration-500">
                  {/* Enhanced Logo */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${club.color} rounded-full blur-xl opacity-40 scale-125 animate-pulse`}
                    ></div>
                    <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/30">
                      <Image
                        src={club.logo}
                        alt={`${club.name} logo`}
                        width={56}
                        height={56}
                        className="w-14 h-14 object-contain filter drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Enhanced Club Info */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white tracking-tight">
                    {club.name}
                  </h3>
                  <p className="text-gray-300 text-center mb-8 leading-relaxed text-sm">
                    {club.description}
                  </p>

                  {/* Enhanced Action Indicator */}
                  <div
                    className={`flex items-center gap-2 bg-gradient-to-r ${club.color} text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105`}
                  >
                    <Smartphone size={16} />
                    <span>{isMobile ? "Tap to Join" : "Hover to Join"}</span>
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Enhanced Back Side (Desktop Only) */}
                {!isMobile && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
                    {/* Logo */}
                    <div className="mb-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
                        <Image
                          src={club.logo}
                          alt={`${club.name} logo`}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-center text-white">
                      {club.name}
                    </h3>

                    {/* Enhanced QR Code */}
                    <div className="bg-white p-4 rounded-2xl mb-6 shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                      <Image
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
                          club.whatsapp
                        )}`}
                        alt="WhatsApp QR Code"
                        width={120}
                        height={120}
                        className="rounded-xl"
                        unoptimized
                      />
                    </div>

                    {/* Enhanced Join Button */}
                    <a
                      href={club.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white px-8 py-4 rounded-2xl hover:from-green-600 hover:via-green-700 hover:to-green-800 font-bold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 text-center flex items-center gap-3 group transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Smartphone size={18} />
                      Join Now
                      <ChevronRight
                        size={18}
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Mobile Instructions */}
        {isMobile && (
          <div className="mt-12 text-center max-w-md">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Smartphone size={32} className="mx-auto mb-3 text-blue-400" />
              <p className="text-gray-300 text-sm leading-relaxed">
                Tap any card to join the community instantly via WhatsApp
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Join thousands of developers, designers, and innovators shaping the
            future
          </p>
        </div>
      </div>

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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .group:hover .float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
