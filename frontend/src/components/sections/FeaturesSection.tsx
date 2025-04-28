export const FeaturesSection = () => {
  const features = [
    { icon: 'satellite-dish', title: 'Monitoreo Satelital', description: 'Imágenes satelitales actualizadas cada 5 días para seguimiento preciso del crecimiento de cultivos.' },
    { icon: 'bug', title: 'Detección de Plagas', description: 'Algoritmos de IA que identifican patrones de plagas con 92% de precisión para acción temprana.' },
    { icon: 'fire', title: 'Mapas de Calor', description: 'Visualización de zonas de estrés hídrico, nutrientes y salud vegetal para riego y fertilización precisos.' },
    { icon: 'chart-bar', title: 'Análisis Predictivo', description: 'Proyecciones de rendimiento basadas en datos históricos y condiciones actuales.' },
    { icon: 'tint', title: 'Gestión de Riego', description: 'Recomendaciones personalizadas de riego basadas en humedad del suelo y pronóstico del tiempo.' },
    { icon: 'mobile-alt', title: 'App Móvil', description: 'Acceso a toda la información desde tu smartphone con alertas en tiempo real.' },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tecnología agrícola de precisión
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Herramientas avanzadas para maximizar el rendimiento de tus cultivos
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 card-hover">
              <div className={`bg-${feature.icon === 'satellite-dish' ? 'green' : feature.icon === 'bug' ? 'blue' : 'yellow'}-100 w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <i className={`fas fa-${feature.icon} text-${feature.icon === 'satellite-dish' ? 'green' : feature.icon === 'bug' ? 'blue' : 'yellow'}-600 text-xl`}></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};