import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div className="mb-8 lg:mb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Gestión Inteligente</span>
            <span className="block text-green-600">de tus Parcelas</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Monitorea, analiza y optimiza el rendimiento de tus cultivos con tecnología satelital avanzada y detección temprana de plagas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300 shadow-lg">
              Ver Demo
            </Button>
            <Button variant="ghost" className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-md text-lg font-medium transition duration-300 shadow-lg border border-gray-300">
              Documentación
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="parcel-map relative overflow-hidden h-96 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button className="bg-white bg-opacity-90 text-green-600 px-6 py-3 rounded-full font-bold shadow-lg flex items-center">
                Ver Mapa Interactivo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};