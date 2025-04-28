export const DashboardPreviewSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div className="mb-8 lg:mb-0 order-2 lg:order-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Panel de Control Intuitivo
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Visualiza todos los datos clave de tus parcelas en un solo lugar. Nuestro dashboard interactivo te permite:
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-green-600 text-xs"></i>
                </div>
              </div>
              <p className="ml-3 text-base text-gray-700">
                Identificar zonas problemáticas con mapas de calor interactivos
              </p>
            </li>
            {/* Repetir para otros puntos */}
          </ul>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="bg-white p-4 rounded-xl shadow-xl">
            {/* Contenido del dashboard */}
          </div>
        </div>
      </div>
    </div>
  );
};