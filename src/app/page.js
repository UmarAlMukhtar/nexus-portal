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
    color: "from-blue-400 to-purple-500",
  },
  {
    name: "MLSA",
    logo: "/mlsa.png",
    description: "Microsoft Learn Student Ambassadors",
    whatsapp: "https://chat.whatsapp.com/JBl5msayLorDmnBIPJsg3p?mode=ac_t",
    color: "from-green-400 to-teal-500",
  },
  {
    name: "Cyber",
    logo: "/cyber.png",
    description: "Cybersecurity & Ethical Hacking",
    whatsapp: "https://whatsapp.com/channel/0029Vb9j6Z87IUYTULlbHM2w",
    color: "from-red-400 to-pink-500",
  },
  {
    name: "FOSS",
    logo: "/foss.png",
    description: "Free & Open Source Software",
    whatsapp: "https://whatsapp.com/channel/0029Vb6yFxTCcW4ohiNKeN0y",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "OpenMind",
    logo: "/openmind.png",
    description: "Community",
    whatsapp: "https://whatsapp.com/channel/0029Vb6Slmh35fM11Gu1aP1o",
    color: "from-indigo-400 to-purple-500",
  },
  {
    name: "Coders",
    logo: "/coders.png",
    description: "Code.Create.Conquer",
    whatsapp: "https://whatsapp.com/channel/0029Vb7oTNQFHWpzlsoZlI33",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "YIP",
    logo: "/yip.png",
    description: "Young Innovators Program",
    whatsapp: "https://whatsapp.com/channel/0029Vb6YysII1rcmiKLM7D1O",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "WOW",
    logo: "/wow.png",
    description: "Women of Wonder",
    whatsapp: "https://whatsapp.com/channel/0029Vb6Z65ELY6cxsgFYVK1P",
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "AWS",
    logo: "/aws.png",
    description: "Amazon Web Services Community",
    whatsapp: "https://whatsapp.com/channel/0029VbB53nN4yltQ7WTJ7G3E",
    color: "from-amber-400 to-yellow-500",
  },
  {
    name: "Space",
    logo: "/space.png",
    description: "Space Technology & Astronomy",
    whatsapp: "https://whatsapp.com/channel/0029VbBz24R6rsQulSLrpL1F",
    color: "from-violet-400 to-purple-500",
  },
  {
    name: "MuLearn",
    logo: "/mulearn.png",
    description: "Mutual Learning Community",
    whatsapp: "https://whatsapp.com/channel/0029Vb69jPaFcowBuFTv8y2X",
    color: "from-emerald-400 to-green-500",
  },
  {
    name: "KBA",
    logo: "/kba.png",
    description: "Kerala Blockchain Academy",
    whatsapp: "https://whatsapp.com/channel/0029Vb6n7RiLo4hftoopNJ1v",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "GDG",
    logo: "/gdg.png",
    description: "Google Developer Groups",
    whatsapp: "https://whatsapp.com/channel/0029VbAlzPWJUM2TTA8iPv2B",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "WTM",
    logo: "/wtm.png",
    description: "Women Techmakers",
    whatsapp: "https://whatsapp.com/channel/0029Vb6KgXlCHDyihhkqlZ04",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "IEDC",
    logo: "/iedc.png",
    description: "Innovation and Entrepreneurship Development Cell",
    whatsapp: "https://whatsapp.com/channel/0029VaAYL1D2f3EAIot5Yl2N",
    color: "from-blue-400 to-indigo-500",
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
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 min-h-screen">
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-5xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Connect. Learn.{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Grow.
            </span>
          </h1>

          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Join vibrant tech communities where innovation meets collaboration.
            Build your network, share knowledge, and accelerate your growth.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-blue-500" />
              <span>Global Community</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-green-500" />
              <span>Expert Mentors</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-yellow-500" />
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
                <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center p-6 backface-hidden hover:border-blue-200 transition-all duration-300">
                  {/* Enhanced Logo */}
                  <div className="relative mb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${club.color} rounded-full blur-xl opacity-30 scale-125 group-hover:opacity-40 group-hover:scale-150 transition-all duration-300`}
                    ></div>
                    <div className="relative bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <Image
                        src={club.logo}
                        alt={`${club.name} logo`}
                        width={56}
                        height={56}
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  </div>

                  {/* Enhanced Club Info */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-800 tracking-tight">
                    {club.name}
                  </h3>
                  <p className="text-gray-500 text-center mb-8 leading-relaxed text-sm">
                    {club.description}
                  </p>

                  {/* Enhanced Action Indicator */}
                  <div
                    className={`flex items-center gap-2 bg-gradient-to-r ${club.color} text-white font-semibold text-sm px-4 py-2 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}
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
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
                    {/* Logo */}
                    <div className="mb-4">
                      <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                        <Image
                          src={club.logo}
                          alt={`${club.name} logo`}
                          width={40}
                          height={40}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
                      {club.name}
                    </h3>

                    {/* Enhanced QR Code */}
                    <div className="bg-white p-3 mb-6 shadow-sm border-2 border-gray-100 flex items-center justify-center">
                      <Image
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
                          club.whatsapp
                        )}`}
                        alt="WhatsApp QR Code"
                        width={120}
                        height={120}
                        unoptimized
                      />
                    </div>

                    {/* Enhanced Join Button */}
                    <a
                      href={club.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all duration-300 text-center flex items-center gap-2 group transform hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Smartphone size={16} />
                      Join Now
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
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
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <Smartphone size={32} className="mx-auto mb-3 text-blue-500" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Tap any card to join the community instantly via WhatsApp
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
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
      `}</style>
    </div>
  );
}
