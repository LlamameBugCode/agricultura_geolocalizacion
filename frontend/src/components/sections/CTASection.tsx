export const CTASection = () => {
  return (
    <div className="bg-green-700 my-5">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">¿Listo para transformar tu agricultura?</span>
          <span className="block text-green-200">Comienza tu prueba gratuita hoy.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition duration-300">
            Ver demostración
          </button>
          <button className="ml-3 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};