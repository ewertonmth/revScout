export default function Partidas() {
  const partidas = [
    { numero: 1, pontuacao: 110, penalidades: 10, melhorMomento: "Auto" },
    { numero: 2, pontuacao: 90,  penalidades: 5,  melhorMomento: "TeleOp" },
    { numero: 3, pontuacao: 180,  penalidades: 0,  melhorMomento: "TeleOp" },
    { numero: 4, pontuacao: 150,  penalidades: 0,  melhorMomento: "Auto" },
    { numero: 5, pontuacao: 30,  penalidades: 20,  melhorMomento: "TeleOp" },
    { numero: 6, pontuacao: 80,  penalidades: 0,  melhorMomento: "Auto" },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black px-4 sm:px-6 md:px-16 lg:px-32">
      <main className="flex flex-col items-center px-4 sm:px-6 md:px-16 lg:px-32 py-8 w-full">
        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-4">
        {partidas.map((partida, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl shadow-md p-4 text-white border border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-base">Partida #{partida.numero}</span>
              <span className={`text-xs font-semibold rounded px-2 py-1 ${partida.melhorMomento === 'Auto' ? 'bg-purple-600' : 'bg-green-600'}`}>
                {partida.melhorMomento}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-300">Pontuação</span>
                <span className="font-bold text-xl">{partida.pontuacao}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-300">Penalidades</span>
                <span className="font-bold text-xl">{partida.penalidades}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      </main>
    </div>
  );
}
