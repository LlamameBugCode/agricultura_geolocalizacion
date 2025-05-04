// app/info/analisis/page.tsx
'use client';

import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

export default function analisis() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Análisis Satelital
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Visualiza tus parcelas con tecnología de mapas satelitales y análisis térmicos en tiempo real
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Satellite Maps */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <span className="text-blue-500 text-4xl">🛰️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mapas Satelitales</h3>
                <p className="text-gray-600">
                  Imágenes de alta resolución de tus parcelas con actualizaciones periódicas para monitorear el crecimiento de los cultivos.
                </p>
              </div>
            </div>

            {/* Heat Maps */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-red-100 flex items-center justify-center">
                <span className="text-red-500 text-4xl">🌡️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mapas de Calor</h3>
                <p className="text-gray-600">
                  Identifica áreas de estrés hídrico o nutrientes mediante análisis térmico de la superficie de las parcelas.
                </p>
              </div>
            </div>

            {/* Parcel Management */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <span className="text-green-500 text-4xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Gestión de Parcelas</h3>
                <p className="text-gray-600">
                  Herramientas de análisis para comparar rendimientos históricos y planificar nuevas siembras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            ¿Necesitas un análisis personalizado?
          </h2>
          <p className="mt-4 text-lg text-green-100 max-w-2xl mx-auto">
            Contáctanos para obtener un análisis detallado de tus parcelas con nuestras herramientas avanzadas
          </p>
          <div className="mt-8">
            <Link
              href={ROUTES.HOME}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
            >
              Solicitar Análisis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}