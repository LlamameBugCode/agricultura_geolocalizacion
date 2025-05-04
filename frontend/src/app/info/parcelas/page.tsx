// app/info/parcelas/page.tsx
'use client';

import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

export default function Parcelas() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Gestión de Parcelas
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Visualiza, analiza y optimiza el rendimiento de tus parcelas con tecnología satelital
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Parcel Overview */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <span className="text-green-500 text-4xl">🌱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Vista General</h3>
                <p className="text-gray-600">
                  Información detallada sobre cada parcela: tamaño, cultivo actual, etapa de crecimiento y rendimiento histórico.
                </p>
              </div>
            </div>

            {/* Soil Analysis */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-yellow-100 flex items-center justify-center">
                <span className="text-yellow-500 text-4xl">🧪</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Análisis de Suelo</h3>
                <p className="text-gray-600">
                  Datos sobre pH, humedad, nutrientes y salinidad para optimizar la fertilización y riego.
                </p>
              </div>
            </div>

            {/* Irrigation Planning */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-blue-500 text-4xl">💧</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Planificación de Riego</h3>
                <p className="text-gray-600">
                  Recomendaciones personalizadas basadas en análisis térmico y datos climáticos históricos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center relative">
              {/* Simulated map elements */}
              <div className="absolute inset-4 grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className={`bg-green-200 bg-opacity-70 rounded-sm border border-green-300 flex items-center justify-center text-sm font-medium ${
                      i % 2 === 0 ? 'bg-opacity-50' : ''
                    }`}
                  >
                    Parcela {i}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 p-3 rounded shadow-md">
                <h4 className="font-semibold text-sm mb-2">Leyenda</h4>
                <div className="flex space-x-3">
                  <div className="flex items-center text-xs">
                    <span className="w-3 h-3 bg-green-200 border border-green-300 inline-block mr-1"></span>
                    <span>Riego óptimo</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <span className="w-3 h-3 bg-yellow-200 border border-yellow-300 inline-block mr-1"></span>
                    <span>Atención requerida</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white border-t">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Vista Satelital</h3>
              <p className="text-gray-600 mb-4">
                Mapa interactivo de tus parcelas con capas de información sobre humedad, temperatura y rendimiento.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Ver Análisis Completo
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                  Descargar Datos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            ¿Quieres agregar una nueva parcela?
          </h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Registra nuevas parcelas y comienza a monitorear su rendimiento desde el primer día
          </p>
          <div className="mt-8">
            <Link
              href={ROUTES.HOME}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
            >
              Agregar Parcela
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}