"use client";

import { useState } from "react";
import { HomeIcon, CalculatorIcon } from "@heroicons/react/24/outline";


import CardNumeroPartidas from "./components/CardNumeroPartidas";
import CardPontuacaoMedia from "./components/CardPontuacaoMedia";
import CardMaiorPontuacao from "./components/CardMaiorPontuacao";
import CardPenalidadesTotais from "./components/CardPenalidadesTotais";
import CardMelhorDesempenho from "./components/CardMelhorDesempenho";
import GraficoAutoTeleOp from "./components/GraficoAutoTeleOp";
import CardPartidas from "./components/CardPartidas";

export default function Home() {
  const [menu, setMenu] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Hamburger mobile */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-900 rounded-md p-2 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <svg width={28} height={28} stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 min-h-screen w-20 bg-gray-900 text-white flex flex-col items-center py-6 px-2 border-r border-gray-800 space-y-6
        transition-transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static
      `}>
        <button
          className="absolute top-2 right-2 text-gray-400 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <svg width={22} height={22} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black mb-2">
          <img src="/logo rev .png" alt="Logo" className="w-8 h-8" />
        </div>
        <nav className="flex flex-col gap-4 mt-8">
          <button
            title="Dashboard"
            className={`p-2 rounded-lg flex items-center justify-center transition-all
              ${menu === "dashboard" ? "bg-black text-blue-700" : "hover:bg-zinc-200 hover:text-blue-700"}`}
            onClick={() => {
              setMenu("dashboard");
              setSidebarOpen(false);
            }}
          >
            <HomeIcon className="h-7 w-7" />
          </button>
          <button
            title="Calculadora"
            className={`p-2 rounded-lg flex items-center justify-center transition-all
              ${menu === "calculadora" ? "bg-black text-blue-700" : "hover:bg-zinc-200 hover:text-blue-700"}`}
            onClick={() => {
              setMenu("calculadora");
              setSidebarOpen(false);
            }}
          >
            <CalculatorIcon className="h-7 w-7" />
          </button>
        </nav>
      </aside>

      <main className="flex flex-col items-center p-4 md:p-8 transition-all flex-1 md:ml-20">
        {menu === "dashboard" && (
          <div className="w-full">
            <CardPartidas />
          </div>
        )}
        {menu === "calculadora" && (
          <div className="w-full h-full min-h-[600px]">
            <iframe
              src="https://ftc-scoring.firstinspires.org/scoreCalculator"
              className="w-full h-full"
              title="FTC Score Calculator"
            />
          </div>
        )}

      </main>
    </div>
  );
}
