// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 flex flex-col items-center gap-16">
      {/* Cabeçalho / Logo */}
      <header className="flex flex-col items-center gap-4">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">Minha Loja</h1>
      </header>

      {/* Produtos / Conteúdo da loja */}
      <main className="grid gap-8 w-full max-w-4xl">
        <div className="p-4 border rounded shadow flex flex-col items-center">
          <Image
            src="/product-example.png"
            alt="Produto exemplo"
            width={150}
            height={150}
          />
          <h2 className="mt-2 font-semibold text-lg">Produto 1</h2>
          <p className="text-sm text-gray-600">Descrição do produto 1.</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Comprar
          </button>
        </div>

        <div className="p-4 border rounded shadow flex flex-col items-center">
          <Image
            src="/product-example.png"
            alt="Produto exemplo"
            width={150}
            height={150}
          />
          <h2 className="mt-2 font-semibold text-lg">Produto 2</h2>
          <p className="text-sm text-gray-600">Descrição do produto 2.</p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Comprar
          </button>
        </div>
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
                  var_title: "var_value",
                  layout: {
                    // bot-name: 'Teste título',
                    // bot-bg-color: '278222',
                    // bot-text-color: 'fff',
                    // user-bg-color: '6a5837',
                    // user-text-color: 'fff0f0',
                  }
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
        &copy; 2025 Minha Loja. Todos os direitos reservados.
      </footer>
    </div>
  );
}
