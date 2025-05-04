// app/info/reportes/page.tsx
'use client';

import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { useState } from 'react';

export default function Reportes() {
  const [selectedReport, setSelectedReport] = useState('rendimiento');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Reportes Inteligentes
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Accede a insights clave sobre el rendimiento de tus cultivos y toma decisiones informadas
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white shadow-md p-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSelectedReport('rendimiento')}
              className={`px-4 py-2 rounded-lg ${
                selectedReport === 'rendimiento'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Rendimiento
            </button>
            <button
              onClick={() => setSelectedReport('climatico')}
              className={`px-4 py-2 rounded-lg ${
                selectedReport === 'climatico'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Climático
            </button>
            <button
              onClick={() => setSelectedReport('economico')}
              className={`px-4 py-2 rounded-lg ${
                selectedReport === 'economico'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Económico
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedReport === 'rendimiento' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Yield Chart */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Rendimiento por Parcela</h3>
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl text-gray-500">📈 Gráfico de barras simulado</span>
                </div>
              </div>

              {/* Growth Timeline */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Crecimiento Histórico</h3>
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl text-gray-500">📅 Línea de tiempo interactiva</span>
                </div>
              </div>
            </div>
          )}

          {selectedReport === 'climatico' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Impacto Climático</h3>
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <span className="text-2xl text-gray-500">🌦️ Mapa de calor climático</span>
              </div>
            </div>
          )}

          {selectedReport === 'economico' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cost Analysis */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Análisis de Costos</h3>
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl text-gray-500">💰 Gráfico circular de gastos</span>
                </div>
              </div>

              {/* Profit Projection */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Proyección de Ganancias</h3>
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl text-gray-500">🚀 Gráfico de tendencia</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Exporta tus reportes
          </h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Descarga los datos en formato PDF o CSV para compartir con tu equipo técnico
          </p>
          <div className="mt-8">
            <Link
              href={ROUTES.HOME}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
            >
              Generar Reporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}