// app/page.tsx
export default function Home() {
  const perfumes = [
    {
      id: 1,
      name: "Perfume Elegance",
      description: "Fragrância suave e marcante para o dia a dia.",
      price: "R$ 120,00",
    },
    {
      id: 2,
      name: "Perfume Intense",
      description: "Aroma sofisticado e intenso para ocasiões especiais.",
      price: "R$ 180,00",
    },
    {
      id: 3,
      name: "Perfume Fresh",
      description: "Perfume leve e refrescante, perfeito para o verão.",
      price: "R$ 95,00",
    },
  ];

  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 flex flex-col items-center gap-16">
      {/* Cabeçalho */}
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-purple-600">Loja de Perfumes da ellen </h1>
        <p className="text-gray-600">Escolha seu perfume favorito e compre agora!</p>
      </header>

      {/* Lista de perfumes */}
      <main className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-4xl">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="p-4 border rounded shadow flex flex-col items-center hover:scale-105 transition-transform"
          >
            <h2 className="mt-2 font-semibold text-lg">{perfume.name}</h2>
            <p className="text-sm text-gray-600 text-center">{perfume.description}</p>
            <p className="mt-1 font-bold">{perfume.price}</p>
            <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Comprar
            </button>
          </div>
        ))}
      </main>

      {/* Widget do Webchat */}
      <div id="webchat-container" className="fixed bottom-4 right-4 z-50">
        <script
          src="https://cdn.hmlbots.digitalcontact.cloud/webchat.js"
          async
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.renderBotWidget(
                '660c440dab86155a5de14e56',
                {
                  var_title: "Loja de Perfumes",
                  layout: {}
                },
                false,
                false
              );
            `,
          }}
        />
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500">
        &copy; 2025 Loja de Perfumes. Todos os direitos reservados.
      </footer>
    </div>
  );
}
