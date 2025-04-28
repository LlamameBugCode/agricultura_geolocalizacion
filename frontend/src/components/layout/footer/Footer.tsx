import Link from 'next/link';

export const FooterSection = () => {
  return (
    <footer className="bg-gray-800 mt-5">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Secciones del Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Sección 1: AgroVision */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">AgroVision</h3>
            <p className="text-gray-300 text-sm">
              Tecnología de precisión para la agricultura moderna. Maximiza rendimientos, minimiza recursos.
            </p>
            <div className="mt-4 flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

          {/* Sección 2: Soluciones */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Soluciones</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Monitoreo Satelital
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Detección de Plagas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Mapas de Calor
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Gestión de Riego
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Análisis Predictivo
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección 3: Recursos */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Guías de Implementación
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white text-sm">
                  Centro de Ayuda
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección 4: Contacto */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-green-400"></i> Av. Agricultura 123, Lima, Perú
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <i className="fas fa-phone-alt mr-2 text-green-400"></i> +51 987 654 321
              </li>
              <li className="text-gray-300 text-sm flex items-center">
                <i className="fas fa-envelope mr-2 text-green-400"></i> info@agrovision.com
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria y derechos reservados */}
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm">
            &copy; 2023 AgroVision. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacidad
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Términos
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};