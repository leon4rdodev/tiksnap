"use client";

import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

export default function DownloadCounter() {
  const [count, setCount] = useState(0);
  const targetCount = 1247893; // Número objetivo

  useEffect(() => {
    // Animación del contador
    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = targetCount / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.floor(increment * step), targetCount);
      setCount(current);

      if (step >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  // Formatear número con separadores de miles
  const formatNumber = (num: number) => {
    return num.toLocaleString("es-ES");
  };

  return (
    <div className="bg-gradient-to-r from-[#FE2C55]/10 to-purple-600/10 border border-[#FE2C55]/30 rounded-lg p-6 text-center">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <TrendingUp className="w-5 h-5 text-[#FE2C55]" />
        <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
          Videos Descargados
        </span>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        {formatNumber(count)}+
      </div>
      <p className="text-xs text-gray-400">
        Usuarios satisfechos en todo el mundo
      </p>
    </div>
  );
}
