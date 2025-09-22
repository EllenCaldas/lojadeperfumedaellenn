'use client';
import { useEffect } from "react";

declare global {
  interface Window {
    renderBotWidget: (
      botId: string,
      options?: any,
      resetSession?: boolean,
      customElementId?: boolean | string
    ) => void;
  }
}

export default function Home() {
  const perfumes = [
    { id: 1, name: "Perfume Elegance", description: "Fragrância suave e marcante para o dia a dia.", price: "R$ 120,00", emoji: "🌸" },
    { id: 2, name: "Perfume Intense", description: "Aroma sofisticado e intenso para ocasiões especiais.", price: "R$ 180,00", emoji: "🔥" },
    { id: 3, name: "Perfume Fresh", description: "Perfume leve e refrescante, perfeito para o verão.", price: "R$ 95,00", emoji: "💧" },
  ];

  useEffect(() => {
    // adiciona o CSS do widget
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://app.hmlbots.digitalcontact.cloud/cdn/webchat/webchat.v2.css";
    document.head.appendChild(link);

    // adiciona os scripts do widget
    const scripts = [
      "https://app.hmlbots.digitalcontact.cloud/cdn/libs/purify.min.js",
      "https://app.hmlbots.digitalcontact.cloud/cdn/libs/showdown.min.js",
      "https://app.hmlbots.digitalcontact.cloud/cdn/libs/axios.js",
      "https://app.hmlbots.digitalcontact.cloud/cdn/libs/socket.io.js",
      "https://app.hmlbots.digitalcontact.cloud/cdn/webchat/webchat.js",
    ];

    scripts.forEach((src, index) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (index === scripts.length - 1) {
        script.onload = () => {
          // inicializa o bot
          window.renderBotWidget("68d192e3bf69c8ad1814a5e8");
        };
      }
      document.body.appendChild(script);
    });
  }, []);

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 flex flex-col items-center gap-16">
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-purple-600">Loja de Perfumes da Ellen</h1>
        <p className="text-gray-600">Escolha seu perfume favorito e aproveite!</p>
      </header>

      <main className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="p-4 border rounded shadow flex flex-col items-center hover:scale-105 transition-transform"
          >
            <div className="text-6xl">{perfume.emoji}</div>
            <h2 className="mt-2 font-semibold text-lg">{perfume.name}</h2>
            <p className="text-sm text-gray-600 text-center">{perfume.description}</p>
            <p className="mt-1 font-bold">{perfume.price}</p>
            <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Comprar
            </button>
          </div>
        ))}
      </main>

      <footer className="mt-16 text-sm text-gray-500">
        &copy; 2025 Loja de Perfumes. Todos os direitos reservados.
      </footer>
    </div>
  );
}
